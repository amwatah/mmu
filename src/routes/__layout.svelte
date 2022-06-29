<script>
import Navigation from "$lib/Navigation.svelte";
import Theme from "$lib/Theme.svelte";

import "../app.css";

    let activeTheme = "light"
    let userLoggedIn = false 

   
    function toggleTheme (){
       if ( activeTheme ==="light") {
         activeTheme = "night"
         
       } else {
         activeTheme = "light"
       }
    }



</script>
<div data-theme={ activeTheme} class="page w-screen min-h-screen overflow-x-hidden   scroll scroll-smooth">
  <Theme  swapTheme={toggleTheme}/>
  <slot />
  <Navigation/>
</div>
