<template>
	<button class="cucumber button cucumber-label" v-bind:class="buttonStyle" v-on:click="handleClick" :disabled="disabled">
		<!-- @slot Button content -->
		<slot></slot>
	</button>
</template>

<script>
/**
Example implementation of a simple button component.

Style variables:  
__--primary-color__: Sets the primary color of the button
*/
export default {
	name: 'CucumberButton',
	props: {
		/**
		 * Inverted style with transparent background and primary color outline.
		 */
		inverted: {
			type: Boolean,
			default: false,
		},
		/**
		 * Square-shaped style
		 */
		square: {
			type: Boolean,
			default: false,
		},
		/**
		 * If true, this button will not be clickable
		 */
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	computed: {
		buttonStyle() {
			return {
				'inverted': this.inverted,
				'square': this.square,
				'disabled': this.disabled,
			}
		},
	},
	methods: {
		handleClick(e) {
				if (!this.disabled) {
				/** Triggered when button is clicked
				 * @event click
				 * @type {Event}
				 */
				this.$emit('click', e)
			}
		}
	}
}
</script>

<style scoped>
.button {
	--primary-color: var(--cucumber-color);
	font-family: 'Dosis', sans-serif;
	border: 0;
	border-radius: 20px;
	cursor: pointer;
	height: 35px;
	vertical-align: middle;
	display: inline-flex;
    align-items: center;
    justify-content: center;
	margin: 5px;
	padding: 0 20px;
	background-color: var(--primary-color);
}

.inverted {
	border: 2px solid var(--primary-color);
	color: black;
	background-color:rgba(0, 0, 0, 0);
}

.square {
	border-radius: 0;
}

.disabled {
	cursor: default;
	--primary-color: #E0E0E0;
	color: gray;
}

.button:hover:not(.disabled) {
  box-shadow: 0px 0px 20px -4px #ccc;
  transition: box-shadow 0.3s ease-in-out;
  transform: scale(1.07, 1.07);
  transition: 0.3s ease-in-out;
}
</style>

<docs>

### Examples

Default button

```js
<cucumber-button>Button</cucumber-button>
<cucumber-button :disabled="true">Button</cucumber-button>
```

Inverted style button

```js
<cucumber-button :inverted="true">Button</cucumber-button>
<cucumber-button :inverted="true" :disabled="true">Button</cucumber-button>
```

Square button with custom primary color

```js
<template>
	<div class="wrapper">
		<cucumber-button :square="true">Button</cucumber-button>
	</div>
</template>
<style scoped>
.wrapper .button {
	--primary-color: #fc6c85;
}
</style>
```

</docs>
