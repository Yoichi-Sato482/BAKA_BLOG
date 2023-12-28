---
title: GoLang教程
date: 2023-03-31 20:07:28
categories: 
- 筆記
tags:
- GoLang
- 教學
---
# Go学习笔记    
## 流程控制

流程控制语句时用来控制程序中的各语句执行顺序的语句，可与其他语句组成一定功能的小逻辑模块

分为三大类：

- 顺序结构
- 条件判断 `if`
- 循环结构 `for`
  

### `if` 分支（单分支）

```go=
if ·[Conditions]·{
    ·[Codes]·    
}
```

注意：

- GoLang中可以不写条件表达式两边的括号
- `if`和表达式之间必须要有空格 
- GoLang必须要有大括号 
- 赶回结果如果为False则直接跳过`{Codes}`  
- `if`中可以直接用 `name := Content;codes`定义变量
  
### `if`分支（双分支）

```go=
if ·[Conditions]·{
    ·[Codes]·
}else{
    ·[Codes]·
}
```

### `if`分支（多分支）

```go=
if ·[Conditions]·{
    ·[Codes]·
}else if{
    ·[Codes]·
}else if{
    ·[Codes]·
}
```
如果在多分支中已经执行了一个分支那么下面的分支则不会在进行判断执行

### `Switch`分支
```go=
switch ·[Conditions]·{
case [value1],[value2],...:
    Codes
case [value3],[value4],...:
    Codes
default:
    Codes
}
```
### `for`循环
```go=
for [index] ; [conditions(bool)] ; [excution]{
    Codes
}
```
注释：
* Switch后面接一个表达式（常量、变量、具有返回值的函数等都可以）
* case后面如果是常量值则不能重复
* switch后面各个值的数据类型必须匹配
* case后面可以接多个值但需要用`,`分割
* case后面不用携带break
* 可选择的default位置可以随意
* switch也可以当作if分支使用
* switch后面也可以直接声明/定义一个变量但是不推荐
* switch穿透可以用`fallthrough`关键字，如果在case后面接一个`fallthrough`关键字则会执行下一个case也叫做switch穿透

## 数组
> 数组是同一种数据类型元素的集合。 在Go语言中，数组从声明时就确定，使用时可以修改数组成员，但是数组大小不可变化。

### 一维数组
数组定义
```go=
var [name] [num]type
```
数组初始化
* 使用初始值列表
```go=
var testArray [3]int                
//数组会初始化为int类型的零值
var numArray = [3]int{1, 2}           
//使用指定的初始值完成初始化
```
* 动态数组长度
```go=
var numArray = [...]int{1, 2}
```
* 使用索引值
```go=
a := [...]int{1: 1, 3: 5}      
```
**索引值从下标0开始**
* 数组的遍历

    基于`for`循环
    ```go=
    for i := 0; i<len(nameArray);i++{
        fmt.Println(nameArray[i])
    }
    ```
    基于`for range`遍历
    ```go=
    for index,value := range nameArray{
        fmt.Println(index)
    }
    //如果将index换成_
    //输出value则可以不要数组的索引
    ```
### 二维数组
二维数组即数组中嵌套了另一个数组，二维数组的`[3][2]`代表的是：一共有三组数据，每一组的数据内含有2个数据
定义：
```go=
func main() {
	a := [3][2]string{
		{"0,0", "0,1"},
		{"1,0", "1,1"},
		{"2,0", "2,2"},
	}
```
对于二维数组的遍历可以使用forrange嵌套的方法输出
```go=
for _, value := range a {
		for _, value1 := range value {
			fmt.Printf("%s\t", value2)
		}
		fmt.Println()
	}
}
```
二维数组只有外层可以使用`[...]`的写法，不支持内层的动态写法
```go=
func main(){
    a := [...][2]string{
        {"...","..."},
        ...
    }
}
```
但是二维数组是可以支持到动态写法的，只是在使用的时候不能用`[...]`的写法，如果要使用动态二维数组需要配合`make`进行数组初始化，如果不进行初始化也可以通过创建一维数组用`append()`加到二维数组之中。
* 使用`make`对二维数组进行初始化
    > [参考代码](https://blog.csdn.net/qq_37822034/article/details/107405871)
```go=
package main

import (
	"fmt"
)

func main() {
	n := 2
	m := 3
	//动态创建二维数组
	grid := make([][]int, n)
	for i := 0; i < n; i++ {
		grid[i] = make([]int, m)
	}
	for i := 0; i < n; i++ {
		for j := 0; j < m; j++ {
			fmt.Print(grid[i][j])
		}
		fmt.Println()
	}
}
```
执行结果:
000
000

* 使用`append`对空的二维数组内容进行添加
    > [参考代码](https://www.runoob.com/go/go-multi-dimensional-arrays.html)
```go=
package main

import "fmt"

func main() {
    // 创建空的二维数组
    animals := [][]string{}

    // 创建三一维数组，各数组长度不同
    row1 := []string{"fish", "shark", "eel"}
    row2 := []string{"bird"}
    row3 := []string{"lizard", "salamander"}

    // 使用 append() 函数将一维数组添加到二维数组中
    animals = append(animals, row1)
    animals = append(animals, row2)
    animals = append(animals, row3)

    // 循环输出
    for i := range animals {
        fmt.Printf("Row: %v\n", i)
        fmt.Println(animals[i])
    }
}
```
### *多维数组
多维数组可以暂时不进行了解，下面拿三维数组作为案例
```go=
package main

import "fmt"

func main() {
    var m3 [3][2][5]int
    fmt.Println(m3)
}

```
执行结果为：`[[[0 0 0 0 0] [0 0 0 0 0]] [[0 0 0 0 0] [0 0 0 0 0]] [[0 0 0 0 0] [0 0 0 0 0]]]`
> 其实三维数组可以看作为多个二维数组的嵌套，这里的`[3][2][5]`代表的就是创建一个新的总长度为3的多维数组，每个数组里面嵌套有两个数组，嵌套的每个数组内有5个值
## 函数
基本语法：
```go=
func [name] (形参列表) (返回值类型){
    [Codes]
    return + 返回值
}
```
不需要的返回值可以直接使用`_`忽略返回值
### 函数内存分析
```go=
package main

import "fmt"

func exchangeNum(num1 int, num2 int) {
	var temp int
	temp = num1
	num1 = num2
	num2 = temp
}
func main() {
	var num1, num2 int = 10, 20
	fmt.Printf("交换前: num1 = %d，num2 = %d\n", num1, num2)
	exchangeNum(num1, num2)
	fmt.Printf("交换后: num1 = %d，num2 = %d\n", num1, num2)
}
```
以上执行结果不变，函数未起作用

---
原因如下：

当自定义函数执行完成后，**Go会将函数存在的空间删除**，以上程序仅在函数内进行数字交换但是**并没有与`main`函数内的变量进行交换**
因为函数的`基本数据类型`和`数组`默认都是**值传递**的，在函数内的**任何修改都不会影响到原来的值**
![内存分析](https://i.imgur.com/9qvpiYW.png)
解决方案：

可以将函数内的变量**使用指针**记录到内存地址里面，当在执行函数的时候程序会交换地址（内的数值）将输入的值进行交换，使用`&num1,&num2`来查看地址对应的值，这就是通过**调取地址**的方法在函数内用指针的方式操作变量，从效果看类似于引用传递

```diff=
package main

import "fmt"

-func exchangeNum(num1 int, num2 int) {
+func exchangeNum(num1 *int, num2 *int) {
    var temp int
-    temp = num1
-    num1 = num2
-    num2 = temp
+    temp = *num1
+    *num1 = *num2
+    *num2 = temp
}
func main() {
	var num1, num2 int = 10, 20
	fmt.Printf("交换前: num1 = %d，num2 = %d\n", num1, num2)
-	exchangeNum(num1, num2)
+       exchangeNum(&num1, &num2)
	fmt.Printf("交换后: num1 = %d，num2 = %d\n", num1, num2)
}

/*
*    此处出现的diff语法为
*    红色为源代码删除的部分
*    绿色为修改后的部分
*/
```
![](https://i.imgur.com/DzUoMcY.png)
### 函数重载
Go语言中不支持函数重载，即不能使用同一个函数在下方直接更改形参重新生成为新的函数，例:
```go=
func exchangeNum(num1 int, num2 int) {
	var temp int
	temp = num1
	num1 = num2
	num2 = temp
}
func exchangeNum(num1 int) {
	var temp int
	temp = num1
}
```
如果需要重载，则需要将函数的形参（参数）变为可变参数，在函数的`[name]`后面增加`...`就可以变成可变参数
```go=
package main

import "fmt"

func reFunc(nums ...int) {
	fmt.Println(nums)
}
func main() {
	reFunc(0)
	fmt.Println()
	reFunc(10)
	fmt.Println()
	reFunc(10, 20, 30, 40, 50)
}

```
执行结果:
```text=
[0]

[10]

[10 20 30 40 50]

```
在处理**可变参数**时，Go语言会将**可变参数**看作为切片处理（可以看作为数组）
可以使用遍历将**可变参数**内的数值遍历出来
```go=
package main

import "fmt"

func reFunc(nums ...int) {
	for i := 0; i < len(nums); i++ {
		fmt.Println(nums[i])
	}
}
func main() {
	reFunc(0)
	fmt.Println()
	reFunc(10)
	fmt.Println()
	reFunc(10, 20, 30, 40, 50)
}

```
## 切片
> 因为数组的长度是固定的并且数组长度属于类型的一部分，所以数组有很多的局限性

切片的本质实际上就是对底层数组的一个封装

声明切片类型的基本语法如下： `var name []T`
在构造切片的时候，索引范围为 **左包含右不包含**
### 获取切片
#### 基于数组定义
```go=
package main

import "fmt"

func main() {
	a := [5]int{33, 44, 55, 66, 77}
	b := a[1:4] //从位置为 1 的数值开始取，取到第 4 歌数值
	fmt.Println(a)
	fmt.Println(b)
	fmt.Printf("类型: %T\n", b)
}
```
输出结果为: 
> [33 44 55 66 77]
> [44 55 66]
> 类型: []int
#### 通过`make`函数进行构造
基本格式：`make([]T, size, cap)`
* `[]T` 为切片类型
* `size`为元素数量
* `cap` 为切片容量

```go=
func main() {
    c := make([]int, 5, 10)
	fmt.Printf("%T\n", c)
	fmt.Println(c)
}
```
### 切片的长度和容量
在GoLang中可以用内置的函数对切片的长度和容量进行获取
* `len()` 函数获取切片长度
* `cap()` 函数获取切片容量

对切片进行再次的切片操作的时，**上限边界** 是 **切片容量 `cap()`** 而不是长度`len()`，所以常量索引必须是非负的并且在int类型的值限度内，对于其它类型的切片（如常量字符串）常量索引也必须在有效的范围内。

> 如果low和high两个指标都是常数，它们必须满足low <= high。如果索引在运行时超出范围，就会发生运行时panic。

判断切片是否为空 **只能使用`len(s) == 0`** 判断

### 切片比较
切片之间没有办法进行比较，所以也不可以用`==`判断两个切片内是否包含有相同的元素，唯一合法的操作是只能与`nil`进行比较

>  一个nil值的切片并没有底层数组，一个nil值的切片的长度和容量都是0。但是我们不能说一个长度和容量都是0的切片一定是nil

如下实例：
```go=
var s1 []int         //len(s1)=0;cap(s1)=0;s1==nil
s2 := []int{}        //len(s2)=0;cap(s2)=0;s2!=nil
s3 := make([]int, 0) //len(s3)=0;cap(s3)=0;s3!=nil
```

### 切片的赋值
如果要对切片进行赋值操作可以直接使用下标对切片对应的下标进行一个赋值操作
```go=
func main() {
	a := []int{0, 0, 0}
	a[0] = 100

}

```

### 切片的赋值拷贝
切片的复制可以通过以下的方法进行：
```go=
func main() {
	a := []int{0, 0, 0}
	b := a
	fmt.Printf("%d  %d\n", a, b)
	b[0] = 100
	fmt.Printf("%d  %d\n", a, b)

}

```
> 执行结果:
[0 0 0]  [0 0 0]
[100 0 0]  [100 0 0]

将变量b直接进行`b:= a`的赋值操作，这样b就与a共用一个内存地址，b发生变化a也相对应的发生变化。

### 切片的遍历
切片的底层为数组，所以切片一样可以用`for range`和索引遍历
#### for range遍历
```go=
func main() {
	a := []int{22, 33, 44, 55, 66}
	for _, v := range a {
		fmt.Println(v)
	}

}
```

#### 索引遍历
```go=
func main() {
	a := []int{22, 33, 44, 55, 66}
	for i := 0; i < len(a); i++ {
		fmt.Println(i, a[i])
	}

}
```

### 使用`append()`对切片进行元素添加
```go=
func main() {
	a := []int{}
	a = append(a, 10)
	for i := 0; i < 10; i++ {
		a = append(a, i+1)
		fmt.Printf("%d\t len:%d\t cap:%d\n", a, len(a), cap(a))
	}
}

```
> 执行结果:
[10 1]	 len:2	 cap:2
[10 1 2]	 len:3	 cap:4
[10 1 2 3]	 len:4	 cap:4
[10 1 2 3 4]	 len:5	 cap:8
[10 1 2 3 4 5]	 len:6	 cap:8
[10 1 2 3 4 5 6]	 len:7	 cap:8
[10 1 2 3 4 5 6 7]	 len:8	 cap:8
[10 1 2 3 4 5 6 7 8]	 len:9	 cap:16
[10 1 2 3 4 5 6 7 8 9]	 len:10	 cap:16
[10 1 2 3 4 5 6 7 8 9 10]	 len:11	 cap:16


当通过`append()`对切片进行动态元素添加时，`append()`切片会自动判断容量是否足够下次的元素添加，所以在输出容量时会发现切片的容量在不断地增加

### `append()`一次添加多个元素
`append()`也支持一次添加多个元素
```go=

func main() {
	a := []int{}
	a = append(a, 10, 9, 8, 7, 6)
	fmt.Println(a)
}
```
> 执行结果：[10 9 8 7 6]

同时，使用`append()`也可以将另一个切片添加到原有的切片内
```go=
func main() {
	a := []int{}
	b := []int{11, 22, 33, 434}
	a = append(a, b...)
	fmt.Println(a)
}
```
> 执行结果: [11 22 33 434]

### *切片扩容的策略
> 可以通过查看$GOROOT/src/runtime/slice.go源码，其中扩容相关代码如下：
```go
newcap := old.cap
doublecap := newcap + newcap
if cap > doublecap {
	newcap = cap
} else {
	if old.len < 1024 {
		newcap = doublecap
	} else {
		// Check 0 < newcap to detect overflow
		// and prevent an infinite loop.
		for 0 < newcap && newcap < cap {
			newcap += newcap / 4
		}
		// Set newcap to the requested cap when
		// the newcap calculation overflowed.
		if newcap <= 0 {
			newcap = cap
		}
	}
}
```
> 从上面的代码可以看出以下内容：
>
> * 首先判断，如果新申请容量（cap）大于2倍的旧容量（old.cap），最终容量（newcap）就是新申请的容量（cap）。
> * 否则判断，如果旧切片的长度小于1024，则最终容量(newcap)就是旧容量(old.cap)的两倍，即（newcap=doublecap），
> * 否则判断，如果旧切片长度大于等于1024，则最终容量（newcap）从旧容量（old.cap）开始循环增加原来的1/4，即（newcap=old.cap,for {newcap += newcap/4}）直到最终容量（newcap）大于等于新申请的容量(cap)，即（newcap >= cap）
> * 如果最终容量（cap）计算值溢出，则最终容量（cap）就是新申请容量（cap）。
> * 需要注意的是，切片扩容还会根据切片中元素的类型不同而做不同的处理，比如int和string类型的处理方式就不一样。


### 使用`copy()`复制切片
基本语法: `copy(destSlice, srcSlice []T)`

```go=
package main

import "fmt"

func main() {
	a := []int{1, 2, 3, 4, 5}
	b := make([]int, 5)
	c := b
	copy(b, a)
	fmt.Printf("%p\t%d\n", a, a)
	fmt.Printf("%p\t%d\n", b, b)
	fmt.Printf("%p\t%d\n", c, c)
}

```
> 执行结果
> a: 0xc00000e450	[1 2 3 4 5]
b: 0xc00000e480	[1 2 3 4 5]
c: 0xc00000e480	[1 2 3 4 5]

注意：使用`copy()`复制的切片是给新的切片单独申请一个新的地址，而用赋值`:=`则是两个切片公用一个相同的地址

### 切片元素的删除
在GoLang中并没有一个内置函数可以对函数进行删除，当需要删除操作的时候，可以使用`append()`进行

删除索引为`index`的元素操作方法为
`a = append(a[0:index], a[index+1:]...`

```go=
func main() {
	// 从切片中删除元素
	a := []int{30, 31, 32, 33, 34, 35, 36, 37}
	// 要删除索引为2的元素
	a = append(a[:2], a[3:]...)
	fmt.Println(a) //[30 31 33 34 35 36 37]
}
```
原理如下：
![](https://i.imgur.com/hdJwRtf.png)

### Go语言排序
GoLang内置了排序的函数包`sort`所以并不需要自己手写排序方法对切片进行排序

GoLang中`sort.Sort`使用的是快速排序的方法但不敢保证稳定性，另一种为`sort.Stable`使用的是稳定排序相对于快速排序稳定
#### 正序排序
```go=
type SortBy []int

func (a SortBy) Len() int           { return len(a) }
func (a SortBy) Swap(i, j int)      { a[i], a[j] = a[j], a[i] }
func (a SortBy) Less(i, j int) bool { return a[i] < a[j] }

func main() {
	a := []int{3, 7, 8, 9, 1}
	sort.Sort(SortBy(a))
	fmt.Println(a)

}
```
#### 逆序排序
```go=
func main() {
	a := []int{3, 7, 8, 9, 1}
	sort.Sort(sort.Reverse(sort.IntSlice(a)))
	fmt.Println(a)

}
```
#### 字符数组排序
```go=

package main
 
import (
    "fmt"
    "sort"
)
 
func main() {
    a := []int{3, 5, 4, -1, 9, 11, -14}
    sort.Ints(a)
    fmt.Println(a)
    
    ss := []string{"surface", "ipad", "mac pro", "mac air", "think pad", "idea pad"}
    sort.Strings(ss)
    fmt.Println(ss)
    sort.Sort(sort.Reverse(sort.StringSlice(ss)))
    fmt.Printf("After reverse: %v\n", ss)
}

```
#### *稳定排序
```go=
type person struct {
	Name string
	Age  int
}

type personSlice []person

func (s personSlice) Len() int           { return len(s) }
func (s personSlice) Swap(i, j int)      { s[i], s[j] = s[j], s[i] }
func (s personSlice) Less(i, j int) bool { return s[i].Age < s[j].Age }

func main() {
	a := personSlice{
		{
			Name: "AAA",
			Age:  55,
		},
		{
			Name: "BBB",
			Age:  22,
		},
		{
			Name: "CCC",
			Age:  0,
		},
		{
			Name: "DDD",
			Age:  22,
		},
		{
			Name: "EEE",
			Age:  11,
		},
	}
	sort.Stable(a)
	fmt.Println(a)
}

```
## 指针

Go语言中的指针与C语言指针不同如下

- 默认值是null
- `*`定义指针类型，`&`取地址 
- 不支持指针运算不支持`->`运算直接用`.`访问目标

### 基本概念

指针就是地址，指针就是存储地址的变量。

`*p`在使用时为取值运算符（间接引用）