<script lang="ts">
   export let  event : any 
</script>

<section class="event-card border-2 border-accent divide-y-2 my-4 m-2 rounded-md">
    <div class="title p-1 bg-accent text-primary-content">
       TITLE :  {event.title}   
    </div>
    <div class="location p-1 ">
       <p class="location"> LOCATION :    {event.location}</p> 
       <p class="date">DATE :  {event.date}</p> 

    </div>
    <div class="body p-2"  >
        {event.describtion}
    </div>
</section>