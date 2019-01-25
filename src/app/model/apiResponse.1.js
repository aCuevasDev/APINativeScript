"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APIResponse1 = /** @class */ (function () {
    function APIResponse1(count, next, previous, results) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
    APIResponse1.prototype.getCount = function () {
        return this.count;
    };
    APIResponse1.prototype.getNext = function () {
        return this.next;
    };
    APIResponse1.prototype.getPrevious = function () {
        return this.previous;
    };
    APIResponse1.prototype.getResults = function () {
        return this.results;
    };
    return APIResponse1;
}());
exports.APIResponse1 = APIResponse1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpUmVzcG9uc2UuMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaVJlc3BvbnNlLjEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQTtJQUVFLHNCQUFtQixLQUFVLEVBQVMsSUFBUyxFQUFTLFFBQWEsRUFBUyxPQUFZO1FBQXZFLFVBQUssR0FBTCxLQUFLLENBQUs7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQUs7SUFBSSxDQUFDO0lBRS9GLCtCQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELDhCQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELGtDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQW5CRCxJQW1CQztBQW5CWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBva2Vtb24gfSBmcm9tIFwiLi9wb2tlbW9uXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBUElSZXNwb25zZTEge1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY291bnQ6IGFueSwgcHVibGljIG5leHQ6IGFueSwgcHVibGljIHByZXZpb3VzOiBhbnksIHB1YmxpYyByZXN1bHRzOiBhbnkpIHsgfVxyXG5cclxuICBnZXRDb3VudCgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvdW50O1xyXG4gIH1cclxuXHJcbiAgZ2V0TmV4dCgpIHtcclxuICAgIHJldHVybiB0aGlzLm5leHQ7XHJcbiAgfVxyXG5cclxuICBnZXRQcmV2aW91cygpIHtcclxuICAgIHJldHVybiB0aGlzLnByZXZpb3VzO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVzdWx0cygpIHtcclxuICAgIHJldHVybiB0aGlzLnJlc3VsdHM7XHJcbiAgfVxyXG59Il19