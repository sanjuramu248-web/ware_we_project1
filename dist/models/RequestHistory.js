var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryKey, Property } from '@mikro-orm/core';
let RequestHistory = class RequestHistory {
    id;
    method;
    url;
    headers;
    body;
    response;
    statusCode;
    timestamp = new Date();
};
__decorate([
    PrimaryKey(),
    __metadata("design:type", Number)
], RequestHistory.prototype, "id", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], RequestHistory.prototype, "method", void 0);
__decorate([
    Property(),
    __metadata("design:type", String)
], RequestHistory.prototype, "url", void 0);
__decorate([
    Property({ type: 'json' }),
    __metadata("design:type", Object)
], RequestHistory.prototype, "headers", void 0);
__decorate([
    Property({ type: 'text' }),
    __metadata("design:type", String)
], RequestHistory.prototype, "body", void 0);
__decorate([
    Property({ type: 'text' }),
    __metadata("design:type", String)
], RequestHistory.prototype, "response", void 0);
__decorate([
    Property(),
    __metadata("design:type", Number)
], RequestHistory.prototype, "statusCode", void 0);
__decorate([
    Property(),
    __metadata("design:type", Date)
], RequestHistory.prototype, "timestamp", void 0);
RequestHistory = __decorate([
    Entity()
], RequestHistory);
export { RequestHistory };
