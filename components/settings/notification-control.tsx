"use client";

import {updateNotificationSetting} from "@/app/lib/actions";
import { SegmentedControl } from "@radix-ui/themes";

export default function NotificationControl({type,user}:{type:string,user:User}){
    const enableNotification = async ()=>{
        await updateNotificationSetting(user,true)
    }
    const disableNotification = async ()=>{
        await updateNotificationSetting(user,false)
    }

    return (
        <>
        {
            type==="enabled"?<SegmentedControl.Item onClick={enableNotification} value={"enabled"}>Enabled</SegmentedControl.Item>:
            <SegmentedControl.Item onClick={disableNotification} value={"disabled"}>Disabled</SegmentedControl.Item>}
        </>
    )
}