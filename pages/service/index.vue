<template>
	<view class="work service">
		<view class="head" :class="{fixed:isFixed}"
			:style="{'padding-top':statusBarHeight+'px','height':(!isFixed?titleBarHeight:0)+'px'}">
			<image class="logo" src="/static/image/logo.jpg" mode="aspectFill"></image>
			<view class="title">
				<text class="h1">乐享零工</text>
				<text class="txt">随时随地，轻松工作！</text>
			</view>
		</view>
	<view class="top-bar" :class="{fixed:isFixed}" :style="isFixed?'top:'+(statusBarHeight-2)+'px':''">
			<div class="content">
				<view class="position service">
					南山区
					<uni-icons type="bottom" size="20"></uni-icons>
				</view>
				<view class="search" :style="isFixed?`margin-right:${menuWidth+10}px`:''" @click="toSearch">
					<uni-icons type="search" size="20"></uni-icons>
					搜服务
				</view>
			</div>
		</view>
		<view class="main">
			<view class="list">
				<block v-for="d in list">
					<comItem :item="d" :type="2" />
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import comItem from '@/components/comItem.vue'
	import {
		mapActions
	} from 'vuex'
	export default {
		components: {
			comItem
		},
		data() {
			return {
				statusBarHeight: 0,
				titleBarHeight: 44,
				wHeight: "",
				keywords: "", //搜索关键字
				list: [],
				isFixed: false,
				menuWidth:0
			}
		},
		onLoad() {
			let that = this;
			uni.getSystemInfo({
				success(res) {
					let headerH = uni.getWindowInfo();
					let mb=uni.getMenuButtonBoundingClientRect()
					that.menuWidth = mb.width
					that.statusBarHeight = res.statusBarHeight
					that.wHeight = res.windowHeight
					// that.titleBarHeight = headerH.bottom + headerH.top - res.statusBarHeight * 2 + 20
				},
			});
			this.list = this.initData(20)
		},
		onShow() {
			console.log('page Show')
		},
		onHide() {
			console.log('page Hide')
		},
		methods: {
			...mapActions({
				login: 'user/login'
			}),
			initData(n) {
				let arr = new Array(n).fill(0).map((d, i) => {
					let min = Math.ceil(1);
					let max = Math.floor(3);
					let type = Math.floor(Math.random() * (max - min + 1)) + min
					return {
						id: i + 1,
						type: type,
						title: `餐厅服务员${type}`
					}
				})
				return arr
			},
			toSearch(){
				uni.navigateTo({
					url:"/pages/search/search?type=2"
				})
			},
			onPageScroll(e) {
				this.isFixed = e.scrollTop >= this.titleBarHeight
			},
			clickLogin() {
				let postData = {
					username: '111',
					password: '22222'
				}
				this.login(postData).then(res => {
					console.log('登录成功', res)
				})
			}
		}
	}
</script>

<style lang="scss">
	@import '../work/index.scss';
</style>