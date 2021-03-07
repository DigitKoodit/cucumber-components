<template>
	<div class="cucumber collapse">
		<div class="header cucumber-label" v-on:click="toggle">
			<!-- @slot Collapse title -->
			<slot name="title">{{ title }}</slot>
			<font-awesome-icon :icon="icon"></font-awesome-icon>
		</div>
		<transition name="fade">
			<div v-if="expanded" class="content">
				<!-- @slot Collapse content -->
				<slot></slot>
			</div>
		</transition>
	</div>
</template>

<script>
/**
Expandable panel that can be used to toggle visiblity of its content.
  
Style variables:  
__--example-variable__: example css variable documentation
*/
export default {
	name: 'CucumberCollapse',
	data() {
		return {
			expanded: !this.collapse
		}
	},
	props: {
		/**
		 * Title of the collapse
		 */
		title: {
			type: String,
			default: "",
		},
		/**
		 * Whether the panel is collapsed or not
		 */
		collapse: {
			type: Boolean,
			default: true
		},
	},
	methods: {
		toggle() {
			this.expanded = !this.expanded
			/**
			 * Triggered when the visibility is toggled
			 * @event update:expanded
			 * @type {Boolean}
			 */
			this.$emit('update:expanded', this.expanded)
		}
	},
	computed: {
		icon() {
			return this.expanded ? 'minus' : 'plus'
		}
	},
	watch: {
		collapse(value) {
			this.expanded = !value
		}
	}
}
</script>

<style scoped>
.collapse {
	--panel-color: var(--cucumber-color);
	--content-padding: 20px 20px;
}

.header {
	background-color: var(--panel-color);
	border-radius: 5px 5px 0 0;
	cursor: pointer;
	padding: 15px;

	display: flex;
    justify-content: space-between;
}

.content {
	padding: var(--content-padding);
	background-color: whitesmoke;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .25s ease-out;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

<docs>

### Examples

Collapse example

```js
<cucumber-collapse title="Collapse" :collapse=false>
	<template v-slot:title>
		<span>Title</span>
	</template>
	<p>This is the content</p>
</cucumber-collapse>
```

Panel color and content padding

```js
<template>
	<div class="wrapper">
		<cucumber-collapse title="Collapse">
			<template v-slot:title>
				<span>Title</span>
			</template>
			<p>This is the content</p>
		</cucumber-collapse>
	</div>
</template>
<style scoped>
.wrapper .collapse {
	--panel-color: #fc6c85;
	--content-padding: 20px 0 0 0;
}
</style>
```

Two-way binding

```js
<template>
	<div class="cucumber">
		<input type="checkbox" style="margin-bottom: 20px" v-on:change="handleClick" :checked="!close">
		<label>Are you hungry?</label>
		<cucumber-collapse title="Collapse" :collapse=close v-on:update:expanded="handleExpand">
			<template v-slot:title>
				<span>Menu</span>
			</template>
			<p>Restaurant is currently not accepting any orders.</p>
		</cucumber-collapse>
	</div>
</template>
<script>
export default {
	data() {
		return {
			close: true
		}
	},
	methods: {
		handleClick(e) {
			this.close = !this.close
		},
		handleExpand(e) {
			this.close = !e
		}
	}
}
</script>
```

</docs>
