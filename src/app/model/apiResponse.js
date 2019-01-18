"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var APIResponse = /** @class */ (function () {
    function APIResponse(count, next, previous, results) {
        this.count = count;
        this.next = next;
        this.previous = previous;
        this.results = results;
    }
    APIResponse.prototype.getCount = function () {
        return this.count;
    };
    APIResponse.prototype.getNext = function () {
        return this.next;
    };
    APIResponse.prototype.getPrevious = function () {
        return this.previous;
    };
    APIResponse.prototype.getResults = function () {
        return this.results;
    };
    return APIResponse;
}());
exports.APIResponse = APIResponse;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpUmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcGlSZXNwb25zZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBO0lBRUkscUJBQW1CLEtBQWEsRUFBUSxJQUFZLEVBQVMsUUFBZ0IsRUFBUyxPQUFtQjtRQUF0RixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVEsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLGFBQVEsR0FBUixRQUFRLENBQVE7UUFBUyxZQUFPLEdBQVAsT0FBTyxDQUFZO0lBQ3ZHLENBQUM7SUFFSCw4QkFBUSxHQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxnQ0FBVSxHQUFWO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFDTCxrQkFBQztBQUFELENBQUMsQUFwQkQsSUFvQkM7QUFwQlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2tlbW9uIH0gZnJvbSBcIi4vcG9rZW1vblwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQVBJUmVzcG9uc2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBjb3VudDogbnVtYmVyLHB1YmxpYyBuZXh0OiBzdHJpbmcsIHB1YmxpYyBwcmV2aW91czogc3RyaW5nLCBwdWJsaWMgcmVzdWx0cyA6IFBva2Vtb25bXSkgXHJcbiAgICB7IH1cclxuICBcclxuICAgIGdldENvdW50KCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvdW50O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0TmV4dCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5uZXh0O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgZ2V0UHJldmlvdXMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMucHJldmlvdXM7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBnZXRSZXN1bHRzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlc3VsdHM7XHJcbiAgICB9XHJcbn0iXX0=