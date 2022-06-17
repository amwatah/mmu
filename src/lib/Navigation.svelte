<script>
import { goto } from "$app/navigation";
import Icon from "@iconify/svelte"

</script>

<section class="nav fixed bottom-0 w-full h-[8vh] text-primary rounded-t-lg flex justify-evenly items-center   ">
    <button on:click={ ()=> goto("/home")} class="flex flex-col items-center">
        <Icon icon="ant-design:home-filled" />
        <p class="text-xs ">Home</p>
    </button>
    <button  on:click={ ()=> goto("/create")}  class="flex flex-col items-center">
        <Icon icon="bxs:comment-edit" />
        <p class="text-xs ">Create</p>
    </button>
    <button  on:click={ ()=> goto("/events")} class="flex flex-col items-center">
        <Icon icon="healthicons:community-meeting" />
        <p class="text-xs ">Events</p>
    </button>
    <button on:click={ ()=> goto("/blogs")}  class="flex flex-col items-center">
        <Icon icon="fa6-solid:blog" />
        <p class="text-xs   ">Blogs</p>
    </button>

</section>