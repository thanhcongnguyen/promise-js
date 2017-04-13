# introduction
## promise state
* Pending – trang thái khởi tạo, lúc này kết quả của promise vẫn chưa được xác định, bởi vì tác vụ bất đồng bộ vẫn chưa hoàn thành.
* Fullfilled – trạng thái hoàn thành, tác vụ bất đồng bộ đã hoàn thành, và promise đã có giá trị.
* Rejected – trạng thái bị từ chối, tác vụ bất đồng bộ thực thi thất bại, và promise sẽ không bao giờ được hoàn thành (fullfilled). Trong trạng thái bị từ chối (rejected) một promise sẽ chứa một lý do (reason) để chỉ ra tại sao việc thực thi thất bại.
## syntax
new Promise(function(resolve, reject){
	//resolve(); or reject();
})
