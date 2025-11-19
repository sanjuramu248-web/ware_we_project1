import axios from 'axios';
import { orm } from '../db';
import { RequestHistory } from '../models/RequestHistory';
export const makeRequest = async (req, res) => {
    const { method, url, headers, body } = req.body;
    try {
        const axiosConfig = {
            method: method,
            url: url,
            headers: headers || {},
            data: body,
        };
        const response = await axios(axiosConfig);
        const history = new RequestHistory();
        history.method = method;
        history.url = url;
        history.headers = headers;
        history.body = body;
        history.response = JSON.stringify(response.data);
        history.statusCode = response.status;
        await orm.em.persistAndFlush(history);
        res.json({
            status: response.status,
            data: response.data,
            historyId: history.id,
        });
    }
    catch (error) {
        const history = new RequestHistory();
        history.method = method;
        history.url = url;
        history.headers = headers;
        history.body = body;
        history.response = error.message || 'Error';
        history.statusCode = error.response?.status || 500;
        await orm.em.persistAndFlush(history);
        res.status(500).json({
            error: error.message,
            historyId: history.id,
        });
    }
};
export const getHistory = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    const [histories, total] = await orm.em.findAndCount(RequestHistory, {}, {
        limit,
        offset,
        orderBy: { timestamp: 'DESC' },
    });
    res.json({
        data: histories,
        pagination: {
            page,
            limit,
            total,
            pages: Math.ceil(total / limit),
        },
    });
};
