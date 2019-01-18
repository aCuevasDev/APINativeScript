"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var APIResponseService = /** @class */ (function () {
    function APIResponseService(count, next, previous, results) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
    APIResponseService.prototype.getCount = function () {
        return this.count;
    };
    APIResponseService.prototype.getNext = function () {
        return this.next;
    };
    APIResponseService.prototype.getPrevious = function () {
        return this.previous;
    };
    APIResponseService.prototype.getResults = function () {
        return this.results;
    };
    APIResponseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [Number, String, String, Array])
    ], APIResponseService);
    return APIResponseService;
}());
exports.APIResponseService = APIResponseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpcmVzcG9uc2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwaXJlc3BvbnNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFNM0M7SUFJRSw0QkFBbUIsS0FBYSxFQUFRLElBQVksRUFBUyxRQUFnQixFQUFTLE9BQW1CO1FBQXRGLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLFlBQU8sR0FBUCxPQUFPLENBQVk7SUFDdkcsQ0FBQztJQUVILHFDQUFRLEdBQVI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELG9DQUFPLEdBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztJQUVELHVDQUFVLEdBQVY7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQXJCVSxrQkFBa0I7UUFIOUIsaUJBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7O09BQ1csa0JBQWtCLENBc0I5QjtJQUFELHlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0QlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9rZW1vbiB9IGZyb20gJy4vbW9kZWwvcG9rZW1vbic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEFQSVJlc3BvbnNlU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBzdGF0aWMgcGttbiA6IHtuYW1lOiBzdHJpbmcsIHVybDogc3RyaW5nfVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3VudDogbnVtYmVyLHB1YmxpYyBuZXh0OiBzdHJpbmcsIHB1YmxpYyBwcmV2aW91czogc3RyaW5nLCBwdWJsaWMgcmVzdWx0cyA6IFBva2Vtb25bXSkgXG4gIHsgfVxuXG4gIGdldENvdW50KCl7XG4gICAgcmV0dXJuIHRoaXMuY291bnQ7XG4gIH1cblxuICBnZXROZXh0KCl7XG4gICAgcmV0dXJuIHRoaXMubmV4dDtcbiAgfVxuXG4gIGdldFByZXZpb3VzKCl7XG4gICAgcmV0dXJuIHRoaXMucHJldmlvdXM7XG4gIH1cblxuICBnZXRSZXN1bHRzKCl7XG4gICAgcmV0dXJuIHRoaXMucmVzdWx0cztcbiAgfVxufVxuIl19