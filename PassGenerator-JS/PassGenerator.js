class Password{
    constructor(){
        console.log("Welcome to the Password Generator!")
        this.pass = "";
    }
    generator(len){
        let char = "abcdefghijklmnopqrstuvwxyz";
        let num = "0123456789"
        let cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let sp = "!@#$%^&*()"

        if(len < 3){
            console.log("Password should be at least 3 characters");
        }
        else{
            let i = 0;
            while(i < len){
                this.pass += char[Math.floor(Math.random() * char.length)]
                this.pass += num[Math.floor(Math.random() * num.length)]
                this.pass += cap[Math.floor(Math.random() * cap.length)]
                this.pass += sp[Math.floor(Math.random() * sp.length)]
                i +=4;
            }
        }
        this.pass = this.pass.substring(0,len);
        console.log(this.pass)
    }
}
let p = new Password();
p.generator(5);