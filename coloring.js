function addClass(clsname,event){
    let el=event.target
    el.className=el.className+' '+clsname;
}
function removeClass(clsName,event){
    let currentCls=event.target.className
    let removedClass=currentCls.replace(new RegExp(clsName,'g'),'')
    event.target.className=removedClass.trim()
}