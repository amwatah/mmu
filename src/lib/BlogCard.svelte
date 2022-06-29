<script lang="ts">
	export let blog: any;
</script>

<section class=" border-2  border-accent  m-2  z-50  text-primary-content  ">
	<div class="head flex flex-col items-center border-b-2 bg-accent  ">
		<p class="title uppercase">
			TITLE : {blog?.title}
		</p>
		<p class="author uppercase">
			AUTHOR : {blog?.author}
		</p>
	</div>
	<div class="body p-1">
		<div class="collapse">
			<input type="checkbox" class="peer" />
			<div
				class="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content border-b-2"
			>
				  READ 
			</div>
			<div
				class="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content "
			>
              <div class="p-2">
                 {blog.body}
              </div>
			</div>
		</div>
	</div>
</section>
