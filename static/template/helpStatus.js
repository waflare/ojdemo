export default [
  {
    ename: 'ACCEPTED',
    cname: '答案正确',
    explain: '恭喜你通过了这道题！'
  },{
    ename: 'PRESENTATION_ERROR',
    cname: '格式错误',
    explain: '您的程序的输出结果格式上与答案不符（如多了或者少了换行、空格等）'
  },{
    ename: 'WRONG_ANSWER',
    cname: '答案错误',
    explain: '您的程序的输出结果与答案不符'
  },{
    ename: 'COMPILATION_ERROR',
    cname: '编译错误',
    explain: '您的程序不能编译通过'
  },{
    ename: 'TIME_LIMIT_EXCEEDED',
    cname: '时间超限',
    explain: '您的程序运行时间超出了该题目的限制'
  },{
    ename: 'MEMORY_LIMIT_EXCEEDED',
    cname: '内存超限',
    explain: '您的程序消耗的内存超出了该题目的限制'
  },{
    ename: 'RUNTIME_ERROR',
    cname: '运行时错误',
    explain: '运行时错误，这个一般是程序在运行期间执行了非法的操作造成的'
  },{
    ename: 'PENGDING_JUDGING',
    cname: '判题中',
    explain: '您提交的程序将暂时处于排队状态等待评判'
  },
]
