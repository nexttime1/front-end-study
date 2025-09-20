import axios from "axios";


interface VideoInfo {
    id: number
    title: string
    userName:string
    userPic: string
    coverUrl: string
    playUrl: string
    duration: string
}

interface VideoResponse<T> {
    code: number
    message: string
    result: {
        total: number
        list: T[]
    }
}

const get = (url: string): MethodDecorator => {
    return (target, propertyKey, descriptor: PropertyDescriptor) => {

        axios.get(url).then(res=>{
            descriptor.value(res.data)
        })

    }
}


class Student {

    // @get("")
    create() {

    }

    @get("https://api.apiopen.top/api/getHaoKanVideo")
    list(data: VideoResponse<VideoInfo>) {
        data.result.list.forEach((value, index, array)=>{
            console.log(index, value.id, value.title, value.userName)
        })
    }
}


let s1 = new Student()
