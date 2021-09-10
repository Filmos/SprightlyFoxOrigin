let tooltip_cache = {}
let monument_materials = {
  "Base": {
    'compactmachines:wall': {Stability: 0.7, Potential: 1.0},
    'minecraft:iron_block': {Stability: 1.8, Potential: 1.0},
    'tconstruct:pig_iron_block': {Stability: 2.1, Potential: 1.2, "Decay": 0.2},
    'tconstruct:slimesteel_block': {Stability: 2.3, Potential: 1.1},
    'minecraft:ancient_debris': {Stability: 6.0, Potential: 1.1},
    'byg:pendorite_block': {Stability: 12.0, Potential: 1.4},
    'byg:ametrine_block': {Stability: 10.0, Potential: 1.8},
    'minecraft:netherite_block': {Stability: 30.0, Potential: 1.8},
    'minecraft:coal_block': {Stability: 0.5, Potential: 1.1},
    'minecraft:obsidian': {Stability: 1.0, Potential: 1.2},
    'minecraft:lapis_block': {Stability: 0.4, Potential: 1.3},
    'minecraft:redstone_block': {Stability: 0.3, Potential: 1.6},
    'minecraft:quartz_block': {Stability: 0.6, Potential: 1.4},
    'minecraft:gold_block': {Stability: 1.2, Potential: 2.0},
    'tconstruct:rose_gold_block': {Stability: 0.2, Potential: 4.2},
    'materialis:fairy_block': {Stability: 1.4, Potential: 2.2},
    'minecraft:crying_obsidian': {Stability: 1.0, Potential: 2.8},
    'minecraft:emerald_block': {Stability: 1.8, Potential: 2.6},
    'minecraft:diamond_block': {Stability: 3.8, Potential: 2.2},
    'twilightforest:arctic_fur_block': {Stability: 1.5, Potential: 1.5},
    'twilightforest:ironwood_block': {Stability: 1.6, Potential: 1.3},
    'tconstruct:tinkers_bronze_block': {Stability: 1.3, Potential: 1.3},
    'tconstruct:copper_block': {Stability: 1.3, Potential: 1.2},
    'create:copper_block': {Stability: 1.3, Potential: 1.2},
    'create:brass_block': {Stability: 1.5, Potential: 1.1},
    'create:zinc_block': {Stability: 1.6, Potential: 1.0},
    'twilightforest:steeleaf_block': {Stability: 2.5, Potential: 1.2},
    'twilightforest:carminite_block': {Stability: 0.2, Potential: 6.0, "Dimensional Stability": -1.2},
    'tconstruct:hepatizon_block': {Stability: 3.4, Potential: 2.0},
    'tconstruct:cobalt_block': {Stability: 3.2, Potential: 2.4},
    'tconstruct:manyullyn_block': {Stability: 5.8, Potential: 2.7},
    'tconstruct:queens_slime_block': {Stability: 2.0, Potential: 2.5},
    'twilightforest:fiery_block': {Stability: 10.0, Potential: 4.2, "Heat": 2.4},
    'twilightforest:knightmetal_block': {Stability: 4.2, Potential: 2.6},
    'create:shadow_steel_casing': {Stability: 2.8, Potential: 1.6, "Dimensional Stability": -0.7},
    'create:refined_radiance_casing': {Stability: 2.6, Potential: 1.8, "Dimensional Stability": 0.7}
  }, 
  "Top": {
    'minecraft:daylight_detector': {Stability: 1.4, Potential: 0.0},
    'minecraft:sea_lantern': {Stability: 1.2, Potential: 0.3},
    'byg:blue_glowcane_block': {Stability: 0.9, Potential: 0.5},
    'byg:purple_glowcane_block': {Stability: 0.8, Potential: 0.6},
    'byg:pink_glowcane_block': {Stability: 0.6, Potential: 0.7},
    'byg:red_glowcane_block': {Stability: 0.5, Potential: 0.8},
    'minecraft:glowstone': {Stability: 0.4, Potential: 0.9},
    'minecraft:lantern': {Stability: 0.1, Potential: 0.7},
    'minecraft:soul_lantern': {Stability: 0.1, Potential: 1.1},
    'minecraft:end_rod': {Stability: 0.2, Potential: 1.5},
    'minecraft:enchanting_table': {Stability: 2.0, Potential: 0.8, "Spread": 0.3},
    'minecraft:beacon': {Stability: 1.7, Potential: 1.0, "Spread": 1.0},
    'minecraft:end_portal_frame': {Stability: 3.6, Potential: 2.0, "Dimensional Stability": 0.4},
    'minecraft:creeper_head': {Stability: 0.7, Potential: 1.1, "Decay": 0.2},
    'minecraft:zombie_head': {Stability: 0.7, Potential: 1.3, "Decay": 0.5},
    'minecraft:skeleton_skull': {Stability: 0.9, Potential: 1.1, "Decay": 0.5},
    'minecraft:wither_skeleton_skull': {Stability: 1.2, Potential: 1.8, "Decay": 1.6},
    'twilightforest:naga_trophy': {Stability: 1.3, Potential: 0.8},
    'twilightforest:lich_trophy': {Stability: 0.9, Potential: 1.2},
    'twilightforest:minoshroom_trophy': {Stability: 1.5, Potential: 1.4},
    'twilightforest:quest_ram_trophy': {Stability: 1.3, Potential: 1.6},
    'twilightforest:knight_phantom_trophy': {Stability: 1.8, Potential: 1.3, "Decay": -0.3},
    'twilightforest:yeti_trophy': {Stability: 1.2, Potential: 1.2, "Heat": -1.0},
    'twilightforest:snow_queen_trophy': {Stability: 1.4, Potential: 1.4, "Heat": -3.6},
    'twilightforest:hydra_trophy': {Stability: 3.4, Potential: 2.8, "Heat": 2.4},
    'twilightforest:ur_ghast_trophy': {Stability: -1.4, Potential: 4.2},
    'minecraft:dragon_head': {Stability: 2.4, Potential: 1.8, "Dimensional Stability": -0.3},
    'minecraft:campfire': {Stability: 0.5, Potential: 1.1, "Heat": 0.4},
    'minecraft:soul_campfire': {Stability: 0.7, Potential: 0.8, "Heat": 0.2},
    'byg:boric_campfire': {Stability: 0.4, Potential: 0.7, "Heat": 0.4, "Decay": -0.5},
    'byg:cryptic_campfire': {Stability: 0.6, Potential: 1.4, "Heat": 0.9}
  }
}

onEvent('item.tooltip', tooltip => {
  function relative(val, cond) {if(cond) return val; return (val>0?"+":"")+val}
  
  for(let type in monument_materials) {
    for(let m in monument_materials[type]) {
      mat = monument_materials[type][m]
  
      let tip = [
        Text.of("[Monument "+type+"]").darkPurple(),
        [Text.of("Stability: ").gray(), Text.of(relative(mat.Stability, type=="Base")).lightPurple()],
        [Text.of("Potential: ").gray(), Text.of(relative(mat.Potential, type=="Base")).lightPurple()]
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
      text.add(0, Text.of("[Monument Part]").darkGray())
    }
  })
})