
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
let monument_shape = [
  [ 0,  0,  0, "Top" , 1],
  [ 0, -1,  0, "Base", 1.5],
  [ 0, -2,  0, "Base", 1.2],
  [ 0, -3,  0, "Base", 1.2],
  
  [ 0, -4,  0, "Base", 0.7],
  [-1, -4,  0, "Base", 0.7],
  [ 1, -4,  0, "Base", 0.7],
  [ 0, -4,  1, "Base", 0.7],
  [ 0, -4, -1, "Base", 0.7],
  
  [-2, -3,  0, "Base", 1.0],
  [ 2, -3,  0, "Base", 1.0],
  [ 0, -3,  2, "Base", 1.0],
  [ 0, -3, -2, "Base", 1.0],
  
  [-2, -2,  0, "Top", 0.7],
  [ 2, -2,  0, "Top", 0.7],
  [ 0, -2,  2, "Top", 0.7],
  [ 0, -2, -2, "Top", 0.7],
]

onEvent('block.right_click', event => {
	if(event.item.getId() != 'rftoolsbase:infused_diamond') return
  
  let missed = 0
  let combined = {}
  for(let pos of monument_shape) { 
    let block = event.block.offset(pos[0], pos[1], pos[2])
    
  	mat = monument_materials[pos[3]][block.getId()]
    if(mat) {
      for(let stat in mat) {
        if(!combined[stat]) combined[stat] = 0
        combined[stat] += mat[stat]*pos[4]
      }
    } else {
      missed++
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x-0.1)+' '+(block.y)+' '+(block.z-0.1))
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x-0.1)+' '+(block.y)+' '+(block.z))
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x-0.1)+' '+(block.y)+' '+(block.z+1.1))
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x)+' '+(block.y)+' '+(block.z-0.1))
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x)+' '+(block.y)+' '+(block.z+1.1))
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x+1.1)+' '+(block.y)+' '+(block.z-0.1))
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x+1.1)+' '+(block.y)+' '+(block.z))
      event.server.runCommandSilent('/particle alexsmobs:shocked '+(block.x+1.1)+' '+(block.y)+' '+(block.z+1.1))
    }
  }
  
  
  
  if(missed > 0) {
    event.server.runCommandSilent('/tellraw '+event.player.name+' [{"text":"Invalid structure!","color":"dark_red"}]')
  } else {
    let isActive = false
    let nbt = event.player.getFullNBT()
    // ForgeCaps.origins:origin_component.Powers[{Type:"sprightly_fox:sprightly"}].Data
    for(let i = 0; i<nbt.ForgeCaps["origins:origin_component"].Powers.length; i++) {
      if(nbt.ForgeCaps["origins:origin_component"].Powers[i].Type != "sprightly_fox:sprightly") continue
      nbt.ForgeCaps["origins:origin_component"].Powers[i].Data = -70
    }
    
    let mnbt = nbt.ForgeData["monument"]
    if(!mnbt) mnbt = {}
    else if(mnbt.pos && mnbt.pos.x == event.block.x && mnbt.pos.y == event.block.y && mnbt.pos.z == event.block.z) {isActive = true}
    
    
    let message = '/tellraw '+event.player.name+' [{"text":"MONUMENT '+(isActive?"ACTIVE":"CREATED")+'","color":"dark_purple"},{"text":"\\nStability: ","color":"gray"},{"text":"'+Math.round(combined.Stability*10)/10+'","color":"light_purple"},{"text":"\\nPotential: ","color":"gray"},{"text":"'+Math.round(combined.Potential*10)/10+'","color":"light_purple"}'
    for(let spec in combined) {
      if(spec == "Stability" || spec == "Potential") continue
      message += ',{"text":"\\n'+spec+': ","color":"white"},{"text":"'+Math.round(combined[spec]*10)/10+'","color":"light_purple"}'
    }
    event.server.runCommandSilent(message+"]")
    
    
    mnbt.pos = {x: event.block.x, y: event.block.y, z: event.block.z}
    nbt.ForgeData["monument"] = mnbt
    event.player.setFullNBT(nbt)
  }
	
})