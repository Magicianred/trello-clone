"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentTrello = void 0;
var typeorm_1 = require("typeorm");
var Card_1 = require("./Card");
var CommentTrello = /** @class */ (function () {
    function CommentTrello() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], CommentTrello.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CommentTrello.prototype, "description", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], CommentTrello.prototype, "name", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Card_1.CardTrello; }, function (cardTrello) { return cardTrello.comments; }),
        __metadata("design:type", Card_1.CardTrello)
    ], CommentTrello.prototype, "card", void 0);
    CommentTrello = __decorate([
        typeorm_1.Entity()
    ], CommentTrello);
    return CommentTrello;
}());
exports.CommentTrello = CommentTrello;
//# sourceMappingURL=Comment.js.map