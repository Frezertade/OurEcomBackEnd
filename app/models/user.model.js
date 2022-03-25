module.exports = mongoose => {
    const schema = mongoose.Schema(
        {
            firstName: String,
            lastName: String,
            email: String,
            password: String,
            address: {
                street: String,
                city: String,
                state: String,
                Zip: Number
            }
        },
        { timestamps: true }
    );
    schema.method("toJSON", function () {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    });
    const User = mongoose.model("User", schema);
    return User;
};