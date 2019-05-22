<style>
    * {box-sizing: border-box;}
    ul { margin: 0; padding: 0;}
    ul li {
        cursor: pointer; position:relative; padding: 8px 8px 8px 40px;
        background: #eee; font-size: 14px; transition: 0.3s;
        -webkit-user-select: none; -moz-user-select: none;
        -ms-user-select :none; user-select: none;
    }
    ul li:hover { background:#ddd;}
    ul li.checked {
        background: #BBB; color: #fff; text-decoration: line-through;
    }
    ul li.checked::before {
        content: ''; position: absolute; border-color: #fff;
        border-style: solid; border-width: 0px 1px 1px 0px;
        top: 10px; left: 16px; transform: rotate(45deg);
        height: 8px; width: 8px;
    }
    .close {
        position: absolute; right: 0; top: 0;
        padding: 8px 12px 8px 12px;
    }
    .close:hover {
        background-color: #f44336; color: white;
    }
</style>
<template>
    <ul id="todolist">
        <li v-for="a in todolist" :key="a.id" :class="checked(a.done)" @click="doneToggle({id: a.id})">
            <span>{{a.todo}}</span>
            <span v-if="a.done">(완료)</span>
            <span class="close" v-on:click.stop="deleteTodo({id: a.id})">&#x00D7;</span>
        </li>
    </ul>
</template>

<script type="text/javascript">
    // import eventBus from '../EventBus'
    import Constant from '../Constant'
    import {mapState} from 'vuex'

    export default {
        name : 'List',
        computed: mapState(['todolist']),
        // mapState({
        //     todolist2 : (state) => state.todolist
        // })       이런식으로 속성명을 다르게 지정도 가능
        
        // {
        //     todolist() {
        //         return this.$store.state.todolist;
        //     }
        // },
        // vuex를 위해 아래 주석처리
        // created : function() {
        //     eventBus.$on('add-todo', this.addTodo);
        // },
        // data : function() {
        //     return {
        //         todolist : [
        //             {id:1, todo: "영화보기", done:false},
        //             {id:2, todo: "산책", done:false},
        //             {id:3, todo: "미드", done:false},
        //             {id:4, todo: "운동", done:false},
        //         ]
        //     }
        // },
        methods : {
            checked : function(done) {
                if(done) return {checked:true};
                else return {checked:false};
            },
            //비동기 호출 방식
            deleteTodo : function(payload) {
                this.$store.dispatch(Constant.DELETE_TODO, payload);
            },
            doneToggle : function(payload) {
                this.$store.dispatch(Constant.DONE_TOGGLE, payload);
            }

            // ...mapMutations([       //동기 호출방식
            //     Constant.DELETE_TODO,
            //     Constant.DONE_TOGGLE

            //     //메서드 명칭을 변이의 이름과 다르게 사용하고 싶을 경우
            //     // removeTodo : Constant.DELETE_TODO,
            //     // toggleDone : Constant.DONE_TOGGLE
                
            // ])


            // addTodo : function(todo) {
            //     if(todo !== "") {
            //         this.todolist.push({id:new Date().getTime(), todo: todo, done:false});
            //     }
            // },
            
            // doneToggle : function(id) {
            //     // var index = this.todolist.findIndex((item)=>item.id === id);
            //     // this.todolist[index].done = !this.todolist[index].done;
            //     this.$store.commit(Constant.DONE_TOGGLE, {id:id});
            // },
            // deleteTodo : function(id) {
            //     // var index = this.todolist.findIndex((item)=>item.id === id);
            //     // this.todolist.splice(index, 1);
            //     this.$store.commit(Constant.DELETE_TODO, {id:id});
            // }
        }
    }

</script>