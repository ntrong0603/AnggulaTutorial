function DOG(){
    // thuoc tinh
    var userName = "";
    var password = "";

    //phuong thuc
    this.setInfo = function(userName, password){
        this.userName = userName;
        this.password = password;
    }

    this.checkLogin = function(){
        return (this.userName === "admin" && this.password === "123");
    }


    //lop thong bao loi
    this.throwLogin = function(){
        throw new Error('Invalid username and password');
    };

    this.throwSession = function(){
        throw new Error('Your request is timeout');
    };

    this.showUser = function(){
            console.log(this);
            console.log(this.userName);
            console.log(this.password);
    }.bind(this);

    return this;
}

var dog = new DOG();

module.exports = dog;
