"use strict";
class MongoContactRepository {
    constructor(createOperation) {
        this.createOperation = createOperation;
    }
    persist(contact) {
        this.createOperation.create(contact);
    }
}
exports.MongoContactRepository = MongoContactRepository;

//# sourceMappingURL=MongoContactRepository.js.map
