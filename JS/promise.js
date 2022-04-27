class Commitment {
    static PEDDING ="等待";
    static FULFILLED = "成功";
    static REJECTED = "失败";
    constructor(func){
        this.status = Commitment.PEDDING;
        this.result = null;
        this.fulfilledCallback = [];
        this.rejectedCallback = [];
        try{
            func(this.resolve.bind(this),this.reject.bind(this))
        }catch(e){
            this.reject(e)
        }
    }
    resolve(result){
        setTimeout(()=>{
             if (this.status == Commitment.PEDDING) {
            this.status = Commitment.FULFILLED;
            this.result = result;
            this.fulfilledCallback.forEach(callback => callback(result));
        }
        })
       
    }
    reject(result){
        setTimeout(() => {
            if (this.status == Commitment.PEDDING) {
            this.status = Commitment.REJECTED;
            this.result =result;
            this.rejectedCallback.forEach(callback => callback(result));
        }
        });   
    }
    then(onfulfill,onreject){
        return new Commitment((resolve,reject) =>{
            onfulfill = typeof onfulfill == "function"? onfulfill:()=>{};
            onreject = typeof onreject == "function"? onreject:()=>{};
            if (this.status == Commitment.PEDDING) {
                this.fulfilledCallback.push(onfulfill);
                this.rejectedCallback.push(onreject);
            }
            if (this.status == Commitment.FULFILLED) {
                setTimeout(()=>{
                    onfulfill(this.result);
                })    
            }
            if (this.status == Commitment.REJECTED) {
                setTimeout(()=>{
                    onreject(this.result);
                })  
            }
        })
       
    }
}