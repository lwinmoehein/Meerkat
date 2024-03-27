export {}

declare global {
    interface Job {
        id: string
        name: string
        slug: string
        url:string
        last_tag_count:number
        is_active:boolean
        tags:string[]
        created_at:string
    }

    interface User{
        name:string,
        email:string
    }
}