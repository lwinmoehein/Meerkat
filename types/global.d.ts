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
    interface NotificationData{
        title:string,
        job_name:string,
        job_url:string,
        job_last_tag_count:number
    }

    interface Notification{
        id:number,
        read_at: string,
        created_at: string,
        updated_at:string,
        data:NotificationData
    }

    interface NotificationPagination {
        total:number,
        per_page:number,
        current_page:number,
        data:Notification[]
    }
}