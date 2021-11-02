let tooltip_cache = {}
let tooltip_mini_cache = {}

onEvent('item.tooltip', tooltip => {
  function relative(val, cond) {if(cond) return val; return (val>0?"+":"")+val}
  
  for(let type in monument_materials) {
    for(let m in monument_materials[type]) {
      mat = monument_materials[type][m]
  
      let tip = [
        Text.of("[Quasi "+type+"]").darkGray(),
        [Text.of("Stability: ").gray(), Text.of(relative(mat.Stability, type=="Material")).white()],
        [Text.of("Potential: ").gray(), Text.of(relative(mat.Potential, type=="Material")).white()]
      ]
  
      for(let spec in mat) {
        if(spec == "Stability" || spec == "Potential") continue
        tip.push([Text.of(spec+": ").aqua(), Text.of(relative(mat[spec])).white()])
      }
  
      tooltip_cache[m] = tip
      tooltip_mini_cache[m] = Text.of("[Quasi "+type+"]").darkGray()
    }
  }
  
  tooltip.addAdvanced(Object.keys(tooltip_cache), (item, advanced, text) => {
    if(tooltip.isShift()) {
      text.addAll(0, tooltip_cache[item.id])
    } else {
      text.add(0, tooltip_mini_cache[item.id])
    }
  })
})