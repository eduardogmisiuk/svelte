<script>
	export let message;
	export let user;
</script>

<div class='
		max-w-fit
		flex flex-col justify-start
		bg-blue-100
		rounded-2xl p-3
		{user === message.sender ? "self-end" : "self-start"}
	'
>
	<strong>
		{message.sender}
	</strong>
	<span>
		{message.text}
	</span>
	<small>
		<time>
			{message.createdAtFormatted}
		</time>
	</small>
</div>
