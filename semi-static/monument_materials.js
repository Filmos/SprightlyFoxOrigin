let tooltip_cache = {}

onEvent('item.tooltip', tooltip => {
  function relative(val, cond) {if(cond) return val; return (val>0?"+":"")+val}
  
  for(let type in monument_materials) {
    for(let m in monument_materials[type]) {
      mat = monument_materials[type][m]
  
      let tip = [
        Text.of("[Quasi "+type+"]").darkPurple(),
        [Text.of("Stability: ").gray(), Text.of(relative(mat.Stability, type=="Material")).lightPurple()],
        [Text.of("Potential: ").gray(), Text.of(relative(mat.Potential, type=="Material")).lightPurple()]
      ]
  
      for(let spec in mat) {
        if(spec == "Stability" || spec == "Potential") continue
        tip.push([Text.of(spec+": "), Text.of(relative(mat[spec])).lightPurple()])
      }
  
      tooltip_cache[m] = tip
    }
  }
  
  tooltip.addAdvanced(Object.keys(tooltip_cache), (item, advanced, text) => {
    if(tooltip.isShift()) {
      text.addAll(0, tooltip_cache[item.id])
    } else {
      text.add(0, Text.of("[Quasi "+type+"]").darkGray())
    }
  })
})