//封装哈希表类
function HashTable() {
    //属性
    this.storage = []
    this.count = 0//计算已经存储的元素个数
    //装填因子：loadFactor > 0.75时需要扩容；loadFactor < 0.25时需要减少容量
    this.limit = 7//初始长度

    //方法
    //哈希函数
    HashTable.prototype.hashFunc = function (str, size) {
        //1.定义hashCode变量
        let hashCode = 0

        //2.霍纳法则，计算hashCode的值
        //cats -> Unicode编码
        for (let i = 0; i < str.length; i++) {
            // str.charCodeAt(i)//获取某个字符对应的unicode编码
            hashCode = 37 * hashCode + str.charCodeAt(i)
        }

        //3.取余操作
        let index = hashCode % size
        return index
    }


    //插入&修改操作
    HashTable.prototype.put = function (key, value) {
        //1.根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2.根据index取出对应的bucket
        let bucket = this.storage[index]

        //3.判断该bucket是否为null
        if (bucket == null) {
            bucket = []
            this.storage[index] = bucket
        }

        //4.判断是否是修改数据
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {
                tuple[1] = value
                return//不用返回值
            }
        }

        //5.进行添加操作
        bucket.push([key, value])
        this.count += 1
    }


    //获取操作
    HashTable.prototype.get = function (key) {
        //1.根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2.根据index获取对应的bucket
        let bucket = this.storage[index]

        //3.判断bucket是否等于null
        if (bucket == null) {
            return null
        }

        //4.有bucket，那么就进行线性查找
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i];
            if (tuple[0] == key) {//tuple[0]存储key，tuple[1]存储value
                return tuple[1]
            }
        }

        //5.依然没有找到，那么返回null
        return null
    }

    //删除操作
    HashTable.prototype.remove = function (key) {
        //1.根据key获取对应的index
        let index = this.hashFunc(key, this.limit)

        //2.根据index获取对应的bucket
        let bucket = this.storage[index]

        //3.判断bucket是否为null
        if (bucket == null) {
            return null
        }

        //4.有bucket,那么就进行线性查找并删除
        for (let i = 0; i < bucket.length; i++) {
            let tuple = bucket[i]
            if (tuple[0] == key) {
                bucket.splice(i, 1)
                this.count -= 1
                return tuple[1]
            }
        }

        //5.依然没有找到，返回null
        return null
    }





}  