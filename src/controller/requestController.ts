import axios, { AxiosResponse } from 'axios';
import { Request, Response } from 'express';
import { initORM } from '../db';
import { RequestHistory } from '../models/RequestHistory';

export const makeRequest = async (req: Request, res: Response) => {
  const { method, url, headers, body } = req.body;
  const orm = await initORM();
  const em = orm.em.fork();

  try {
    const axiosConfig = {
      method: method as string,
      url: url as string,
      headers: headers as Record<string, string> || {},
      data: body as string,
    };

    const response: AxiosResponse = await axios(axiosConfig);

    const history = new RequestHistory();
    history.method = method;
    history.url = url;
    history.headers = headers;
    history.body = body;
    history.response = JSON.stringify(response.data);
    history.statusCode = response.status;

    await em.persistAndFlush(history);

    res.json({
      status: response.status,
      data: response.data,
      historyId: history.id,
    });
  } catch (error: any) {
    const history = new RequestHistory();
    history.method = method;
    history.url = url;
    history.headers = headers;
    history.body = body;
    history.response = error.message || 'Error';
    history.statusCode = error.response?.status || 500;

    await em.persistAndFlush(history);

    res.status(500).json({
      error: error.message,
      historyId: history.id,
    });
  }
};

export const getHistory = async (req: Request, res: Response) => {
  const orm = await initORM();
  const em = orm.em.fork();
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const offset = (page - 1) * limit;

  const [histories, total] = await em.findAndCount(RequestHistory, {}, {
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