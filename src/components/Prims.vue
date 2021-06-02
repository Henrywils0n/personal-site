<template>
    <div class="app-page">
        <h4 class="title">Algorithms!</h4>
        <h5>Subtitle: My engagement in COSC31 - Algorithm Design with Professor Chakrabarti, 21S</h5>
        <h6>(Sub-subtitle aka the Credit Statement: I worked on this project alone with no help from outside sources)</h6>
        
        <p>
            As I would imagine is the case with many students who take an algorithm design class, I was super apprehensive going into the start of the term. 
            However, I feel like the ways in which I engaged in the class helped me understand algorithm design better, be a more creative programmer, and tackle
            challenges presented to me in this class.
        </p>
        <p>
            The first way that I engaged in the class was by having active discussions about all of the ungraded problem sets and trying to solve them with classmates. 
            Also, every time we came across an algorithm that I found a bit (or a lot) confusing in class, I made sure to read about it in the textbook, draw out its execution,
            and spend a lot of time digging through the depths of Youtube watching every single lecture I could find about it to the point where honestly I could 
            probably just submit my Youtube watched history and you would be conviced that I was very very VERY engaged in the class. I also frequented office hours 
            with Jonathan and other TAs. 
        </p>
        <p>
            However, most of my engagement hasn't really been tangible enough to submit as proof, so here is my little project of the term. In the graph below, watch Prims MST Algorithm 
            do its thing and interact with this graphic!
        </p>
        <p>Prims Minimum Spanning Tree algorithm in action. Fill in the inputs and interact to see how the algorithm works!</p>
        <input placeholder="How many vertices?" v-model="n"><p>Click to see Prims run on a graph with {{ n }} vertices.</p>
        <button type="button" @click="createGraph">Click me!</button>

        <canvas id="myCanvas" height="600" width="800">
             Your browser does not support the canvas element.
        </canvas>
    </div>
</template>
<script src="priority-queue.js"></script>
<script>
import PriorityQueue from '../priority-queue';

export default {
    name: 'Prims',
    data() {
        return {
            graph: {
                "nodes": [],
                "edges": []
            },
            width: 800,
            height: 600,
            radius: 10,
            n: 0,
            m: 0,
            unvisColor: "rgb(1,0,0)",
            visColor: "rgb(0,0,1)",
        }
    },
    methods: {
        createGraph() { 
            var canvas = document.getElementById("myCanvas");
            var ctx = canvas.getContext("2d");
            ctx.restore();

            for(var i = 0; i < this.n; i ++) {
                var x = Math.random()*this.width;
                var y = Math.random()*this.height;
                var v = { 
                        "id": i,
                        "x": x,
                        "y": y,
                        "visited": false,
                        "adj": []
                    }
                this.graph.nodes.push(v);
                this.drawVert(v, ctx);
            }
            this.graph.nodes.forEach((n, i) => { 
                for(var j = 0; j < this.graph.nodes.length; j++){
                    if(i != j) {
                        var cost = Math.random() * 10;
                        var e = { 
                        "head": n.id,
                        "tail": this.graph.nodes[j].id,
                        "cost": cost,
                        "visited": false
                        }
                        this.graph.edges.push(e);
                        this.addWeightedEdge(n, this.graph.nodes[j], e);
                        this.drawEdge(n, this.graph.nodes[j], e, ctx);
                    }
                }
            });

        },
        drawVert(v, ctx) {
            ctx.moveTo(v.x, v.y);
            ctx.arc(v.x, v.y, this.radius, 0, 2*Math.PI);
            if(v.visited) {
                ctx.fillStyle = this.visColor;
            }
            else {
                ctx.fillStyle = this.unvisColor;
            }
            ctx.fill();
        },
        drawEdge(v, u, e, ctx) {
            ctx.beginPath();
            ctx.moveTo(v.x, v.y);
            ctx.lineTo(u.x, u.y);
            if(e.visited) {
                ctx.fillStyle = this.visColor;
            }
            else {
                ctx.fillStyle = this.unvisColor;
            }
            ctx.stroke();
        },
        addWeightedEdge(u, v, e) {
            console.log(this.graph.nodes)
            this.graph.nodes[u.id].adj.push(e)
            this.graph.nodes[v.id].adj.push(e)
        },
        primsMST() {
            var ePrime = []
            var par = {}
            var key = {}

            Q = PriorityQueue();

            this.graph.nodes.forEach((n, i) => { 
                par[i] = "None";
                key[i] = Number.MAX_VALUE;

                if(i != len(this.graph.nodes)){
                    Q.enqueue(i, key[i])
                }
                else {
                    Q.enqueue(i, -1)
                }
            });

            while(!Q.isEmpty()){
                var u = Q.extract_min() 
                if(par[u] != "None"){
                    ePrime.append(WtEdge(par[u], u, tempKey));
                }
                this.graph.nodes[u].adj.forEach((e, i) => {
                    v = e.head
                    if(e.cost < key[v]){
                        par[v] = u
                        key[v] = e.cost
                        Q.decr_key(v, e.cost)
                    }
                });
            }

        }

    }
}
</script>
<style lang="scss" scoped>
.title {
    margin: 12px;
}
.app-page{ 
    display: flex;
    align-items: center;
    flex-direction: column;
}
button { 
    width: 90px;
    height: 40px; 
    margin: 0 16px 16px 16px;
}
canvas { 
    width: 800px;
    height: 600px;
    border:1px solid #d3d3d3;
    margin-bottom: 16px;
}
</style>