riot.tag2('todo', '<h3>{opts.title}</h3> <ul> <li each="{items.filter(whatShow)}"> <label class="{completed: done}"> <input type="checkbox" __checked="{done}" onclick="{parent.toggle}"> {title} </label> </li> </ul> <form onsubmit="{add}"> <input name="input" onkeyup="{edit}"> <button __disabled="{!text}">Add #{items.filter(whatShow).length + 1}</button> <button __disabled="{items.filter(onlyDone).length == 0}" onclick="{removeAllDone}">X{items.filter(onlyDone).length} </button> </form>', 'todo body,[riot-tag="todo"] body,[data-is="todo"] body{ font-family: \'myriad pro\', sans-serif; font-size: 20px; border: 0; } todo todo,[riot-tag="todo"] todo,[data-is="todo"] todo{ display: block; max-width: 400px; margin: 5% auto; } todo form input,[riot-tag="todo"] form input,[data-is="todo"] form input{ font-size: 85%; padding: .4em; border: 1px solid #ccc; border-radius: 2px; } todo button,[riot-tag="todo"] button,[data-is="todo"] button{ background-color: #1FADC5; border: 1px solid rgba(0,0,0,.2); font-size: 75%; color: #fff; padding: .4em 1.2em; border-radius: 2em; cursor: pointer; margin: 0 .23em; outline: none; } todo button[disabled],[riot-tag="todo"] button[disabled],[data-is="todo"] button[disabled]{ background-color: #ddd; color: #aaa; } todo ul,[riot-tag="todo"] ul,[data-is="todo"] ul{ padding: 0; } todo li,[riot-tag="todo"] li,[data-is="todo"] li{ list-style-type: none; padding: .2em 0; } todo .completed,[riot-tag="todo"] .completed,[data-is="todo"] .completed{ text-decoration: line-through; color: #ccc; } todo label,[riot-tag="todo"] label,[data-is="todo"] label{ cursor: pointer; }', '', function(opts) {
    this.items = opts.items

    this.edit = function(e) {
      this.text = e.target.value
    }.bind(this)

    this.add = function(e) {
      if (this.text) {
        this.items.push({ title: this.text })
        this.text = this.input.value = ''
      }
    }.bind(this)

    this.removeAllDone = function(e) {
      this.items = this.items.filter(function(item) {
        return !item.done
      })
    }.bind(this)

    this.whatShow = function(item) {
      return !item.hidden
    }.bind(this)

    this.onlyDone = function(item) {
      return item.done
    }.bind(this)

    this.toggle = function(e) {
      var item = e.item
      item.done = !item.done

    }.bind(this)

});
