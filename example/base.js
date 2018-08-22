$("#ruk").ruk({
    only: true,
    after: function (id, state) {
        console.log(id + " : " + state);
    }
});