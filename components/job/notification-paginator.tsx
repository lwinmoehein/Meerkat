import {Button, Flex, Link} from "@radix-ui/themes";

export default async function NotificationPaginator({pagination}:{pagination:NotificationPagination})

{
    return (
        <Flex width={'100%'} mb={'3'} justify={'between'}>
            {pagination.prev_page_url?<Link  href={`/notifications/${pagination.current_page-1}`}>
                <Button variant={'soft'}>Previous</Button>
            </Link>: <Button disabled={true} variant={'soft'}>Previous</Button>}
            {pagination.next_page_url?<Link  href={`/notifications/${pagination.current_page+1}`}>
                <Button variant={'soft'}>Previous</Button>
            </Link>: <Button disabled={true} variant={'soft'}>Next</Button>}
        </Flex>
    )
}