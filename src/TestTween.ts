/**
 * Copyright (c) Egret-Labs.org. Permission is hereby granted, free of charge,
 * to any person obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish, distribute,
 * sublicense, and/or sell copies of the Software, and to permit persons to whom
 * the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
 * INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
 * PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
 * FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

class TestTween {

    public getDescription():string {
        return "这个项目展示了Tween的位移，淡入淡出，旋转，并行，串行，延迟，回调";
    }

    public createExample():void {
        var container = new ns_egret.DisplayObjectContainer();
        ns_egret.MainContext.instance.stage.addChild(container);
        var texture = RES.getRes("b1_png");

        var move = new ns_egret.Bitmap();
        move.texture = texture;
        move.x = 50;
        move.y = 50;
        container.addChild(move);
        ns_egret.Tween.get(move,{loop:true}).to({x:250},2000).to({x:50},2000).call(function (){
            console.log("Hello,Tween!");
        });

        var alpha = new ns_egret.Bitmap();
        alpha.texture = texture;
        alpha.x = 250;
        alpha.y = 50;
        container.addChild(alpha);
        ns_egret.Tween.get(alpha,{loop:true}).to({alpha:0},1000).to({alpha:1},1000);

        var rotation = new ns_egret.Bitmap();
        rotation.texture = texture;
        rotation.x = 150;
        rotation.y = 150;
        container.addChild(rotation);
        ns_egret.Tween.get(rotation,{loop:true}).to({rotation:360},2000).wait(500);
    }
}