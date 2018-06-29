//-----------------注册服务---------------------

//(1)Angular服务存在于Angular应用的整个生命周期，用于存放一些公用数据和方法等，用来共享，很方便的

//(2)导入“注入”修饰器
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

//(3)Injectable修饰器，标志着将这个类提供给依赖注入系统
@Injectable({
    providedIn: 'root'//把服务的提供商注册到根注入器上
})

//(4)导出服务类
export class HeroService {
    getHeroes() {//这里通过方法获取了数据，但常常数据是异步获取的，所以要用到一个异步编程库RxJS，其中有个对象Observable，表示可观察序列，是promise的升级版
        return [
            { id: 1, name: 'thor', img: 'Thor.jpg' },
            { id: 2, name: 'ironman', img: 'ironman.png' },
            { id: 3, name: 'spiderman', img: 'spiderman.png' },
            { id: 4, name: 'thanos', img: 'thanos.png' },
        ]
    }
    /* getHeroesRxJS:Observable<Hero[]>(){
        return of(Heroes);
    } */
    constructor() {

    }
}