<!-- <template>
    <TopNavbar />
    <div>
        <div class="stage">
            <div class="game-name" v-show="!isStart">華容道</div>
            <div class="content clearfix" v-show="isStart">
            <div
            v-for="item in randomData"
            :key="item"
            :class="`img${level}`"
            @click="handleMove(item)"
            >
            <el-image
                v-if="item != randomData.length"
                :src="getSmallImg(`${gameImg}/${level}/${item}.jpg`)"
            ></el-image>
            </div>
            </div>
        </div>
    </div>
    <Footerbar />
</template>

<script>
import '../assets/js/vue.global';
import '../assets/css/style.css';
import TopNavbar from '../components/TopNavbar.vue';
import Footerbar from '../components/Footerbar.vue';



export default {
    components:{
      TopNavbar,
      Footerbar,
    },
    data(){
        return {
            formData: {
                gameImg: "cemetery1",
                level: 3,
            },
            formInline: {
                imgList: [
                { label: "墓園1", value: "cemetery1" },
                ],
                levelList: [
                { label: "初级", value: 3 },
                { label: "高级", value: 5 },
                ],
                },
        }
    },
}
</script>
 -->
