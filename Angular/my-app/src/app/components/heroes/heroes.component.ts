
//----------------创建新的Angluar组件-----------------------

//(1)从@angular/core中导入Component（修饰器，或者说注解）、OnInit（生命周期接口）
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';//引入hero类
import { HeroService } from '../../services/hero.service';//导入服务，HeroService类

//(2)修饰器，告诉Angular框架要去加载这些内容，为了表示当前这个类是干啥的，是组件还是服务
@Component({
    selector: 'app-heroes',//组件的选择器（css元素选择器），即组件的名称，用于在html中使用，如<app-heroes></app-heroes>
    templateUrl: './heroes.component.html',//组件的模板
    styleUrls: ['./heroes.component.css']//组件的私有样式
})

//(3)创建类，之后要在app.module.ts中使用
export class Heroes implements OnInit {
    title: string = "漫威超级英雄";
    heroes: Hero[] = [//有多个超级英雄，使用*ngFor进行数组遍历，如果想得到索引，则可以写成*ngFor="let hero of heroes;let i = index"，这样i就代表索引
        { id: 1, name: 'captain', img: 'captain.png' },//可以用管道符（|）加上管道（如uppercase，即过滤器），将name转成大写，有很多内置的管道
    ];
    selectedHero: Hero;//被选中的超级英雄
    selectHero(hero: Hero) {//选中超级英雄
        this.selectedHero = hero;
    }
    getHeroes() {
        this.heroes = this.heroes.concat(this.heroService.getHeroes());
    }
    constructor(private heroService: HeroService) {//构造方法，在其中加入了参数，表明：1、创建了一个私有属性，2、把它当做服务HeroServie的实例

    }
    ngOnInit() {//接口OnInit指定要实现的方法，属于生命周期钩子，在组件创建完成时调用
        this.getHeroes();//通过服务获取数据
    }
}

//(4)一些Angular常用的指令
//---*ngFor：用于遍历数组和对象，用的是for...of...循环，所以遍历的是值，不是键（注意要写*），如果想得到索引，则可以写成*ngFor="let hero of heroes;let i = index"，这样i就代表索引
//---*ngIf：用于显示和隐藏html元素
//---(click)：绑定click事件，用小括号()括起来
//---[href]：绑定html属性，用中括号[]括起来
//---[(ngModel)]：双向数据绑定，用于表单元素
//---[class.selected]：动态css类.selected

//(5)父组件与子组件通信：@input和@output修饰器
//---Angular提供了修饰器@input和@output来控制组件数据的输入和输出
//---父组件——>子组件：