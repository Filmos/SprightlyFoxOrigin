
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

function loadNbtStorage(player) {
  let nbt = player.getFullNBT().ForgeCaps["origins:origin_component"].Powers
  let ret = {}
  for(let n in nbt) ret[nbt[n].Type] = nbt[n].Data
  return ret
}
function saveNbtStorage(player, data) {
  let dat = []
  for(let k in data) dat.push({Type: k, Data: data[k]})
  let nbt = player.getFullNBT()
  nbt.ForgeCaps["origins:origin_component"].Powers = dat
  player.setFullNBT(nbt)
}

function loadStoredTag(player, tag) {
  let ret = null
  let tags = player.getTags().forEach(t => {
    if(t.indexOf(tag+"-")==0) ret = t.split("-").slice(1).join(":")
  })
  return ret
}
function saveStoredTag(player, tag, value) {
  let toRemove = []
  let tags = player.getTags().forEach(t => {
    if(t.indexOf(tag+"-")==0) toRemove.push(t)
  })
  toRemove.forEach(t => player.server.runCommandSilent("/tag "+player.name+" remove "+t))
  player.server.runCommandSilent("/tag "+player.name+" add "+tag+"-"+value.replaceAll(":", "-"))
}


function getMonumentPos(player, type) {
  let dim = loadStoredTag(player, type+"PosD")
  let nbt = loadNbtStorage(player)
  let pref = "sprightly_fox:the_split_"+type+"Pos"
  return {x: nbt[pref+"X"]/10, y: nbt[pref+"Y"]/10, z: nbt[pref+"Z"]/10, d: dim}
}
function setMonumentPos(player, type, value) {
  let nbt = loadNbtStorage(player)
  let pref = "sprightly_fox:the_split_"+type+"Pos"
  nbt[pref+"X"] = Math.round(value.x*10)
  nbt[pref+"Y"] = Math.round(value.y*10)
  nbt[pref+"Z"] = Math.round(value.z*10)
  saveNbtStorage(player, nbt)
  saveStoredTag(player, type+"PosD", value.d)
}
function getBilocState(player) {
  return loadNbtStorage(player)["sprightly_fox:the_split_BilocState"]
}
function setBilocState(player, state, extraData) {
  extraData = extraData || {}
  let nbt = loadNbtStorage(player)
  nbt["sprightly_fox:the_split_BilocState"] = state
  for(let e in extraData) nbt[e] = extraData[e]
  saveNbtStorage(player, nbt)
}

function displayMonumentStats(rootBlock, player, server, title) {
  let monStats = analyzeMonument(rootBlock, server, true)
  
  if(monStats.missed > 0) {
    server.runCommandSilent('/tellraw '+player.name+' [{"text":"Invalid structure!","color":"dark_red"}]')
  } else {
    let message = '/tellraw '+player.name+' [{"text":"'+title+'","color":"dark_purple"},{"text":"\\nStability: ","color":"gray"},{"text":"'+Math.round(monStats.Stability*10)/10+'","color":"light_purple"},{"text":"\\nPotential: ","color":"gray"},{"text":"'+Math.round(monStats.Potential*10)/10+'","color":"light_purple"}'
    for(let spec in monStats) {
      if(spec == "Stability" || spec == "Potential" || spec == "missed") continue
      message += ',{"text":"\\n'+spec+': ","color":"white"},{"text":"'+Math.round(monStats[spec]*10)/10+'","color":"light_purple"}'
    }
    server.runCommandSilent(message+"]")
  }
  
  return monStats
}
function animateMonument(server, pos, animType) {
  if(animType=="fromMon") server.runCommandSilent(`/execute in ${pos.d} run particle minecraft:end_rod ${pos.x+0.5} ${pos.y} ${pos.z+0.5} 0 0 0 0.1 70`)
  else {
    server.runCommandSilent(`/execute in ${pos.d} run particle minecraft:end_rod ${pos.x+0.5} ${pos.y} ${pos.z+0.5} 0 0 0 1 300`)
    if(animType=="initial") server.runCommandSilent(`/execute in ${pos.d} run particle minecraft:explosion ${pos.x+0.5} ${pos.y-2.5} ${pos.z+0.5} 0 0 0 1 10`)
    for(let dir of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
      for(let i = 0; i<20; i++) server.runCommandSilent(`/execute in ${pos.d} run particle minecraft:end_rod ${pos.x+dir[0]*i/10+0.5} ${pos.y-i/10+0.75} ${pos.z+dir[1]*i/10+0.5}`)
      if(animType=="initial") server.runCommandSilent(`/execute in ${pos.d} run particle minecraft:explosion ${pos.x+dir[0]*2+0.5} ${pos.y-1.5} ${pos.z+dir[1]*2+0.5}`)
    }
  }
  
  if(animType=="initial") {
    server.runCommandSilent(`/execute in ${pos.d} run playsound minecraft:block.beacon.power_select block @a ${pos.x+0.5} ${pos.y+0.5} ${pos.z+0.5} 3 1.4`)
    server.runCommandSilent(`/execute in ${pos.d} run playsound minecraft:block.beacon.activate block @a ${pos.x+0.5} ${pos.y+0.5} ${pos.z+0.5} 3 0.8`)
  } else {
    server.runCommandSilent(`/execute in ${pos.d} run playsound minecraft:block.beacon.ambient block @a ${pos.x+0.5} ${pos.y+0.5} ${pos.z+0.5} 3 0.8`)
    server.runCommandSilent(`/execute in ${pos.d} run playsound minecraft:block.beacon.ambient block @a ${pos.x+0.5} ${pos.y+0.5} ${pos.z+0.5} 3 0.5`)
  }
}
function analyzeMonument(rootBlock, server, displayMissing) {
  let combined = {Stability: 5, Potential: 1}
  for(let pos of monument_shape) { 
    let block = rootBlock.offset(pos[0], pos[1], pos[2])
    
    mat = monument_materials[pos[3]][block.getId()]
    if(!mat) {
      if(displayMissing) {
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x-0.1)+' '+(block.y)+' '+(block.z-0.1))
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x-0.1)+' '+(block.y)+' '+(block.z))
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x-0.1)+' '+(block.y)+' '+(block.z+1.1))
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x)+' '+(block.y)+' '+(block.z-0.1))
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x)+' '+(block.y)+' '+(block.z+1.1))
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x+1.1)+' '+(block.y)+' '+(block.z-0.1))
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x+1.1)+' '+(block.y)+' '+(block.z))
        server.runCommandSilent('/execute in '+block.getDimension()+' run particle alexsmobs:shocked '+(block.x+1.1)+' '+(block.y)+' '+(block.z+1.1))
      }
      mat = {missed: 1}
    }
    for(let stat in mat) {
      if(!combined[stat]) combined[stat] = 0
      combined[stat] += mat[stat]*pos[4]
    }
  }
  return combined
}


function calcDistance(startPos, endPos) {  
  if(startPos.d == endPos.d) return Math.sqrt((startPos.x-endPos.x)*(startPos.x-endPos.x)+(startPos.y-endPos.y)*(startPos.y-endPos.y)+(startPos.z-endPos.z)*(startPos.z-endPos.z))
  let dimCost = (startPos.d=="minecraft:overworld"?0:500)+(endPos.d=="minecraft:overworld"?0:500)
  
  if(startPos.d=="minecraft:the_end") return dimCost + Math.sqrt(startPos.x*startPos.x+(64-startPos.y)*(64-startPos.y)+startPos.z*startPos.z)
  if(endPos.d=="minecraft:the_end") return dimCost + Math.sqrt(endPos.x*endPos.x+(64-endPos.y)*(64-endPos.y)+endPos.z*endPos.z)
  
  if(startPos.d=="minecraft:the_nether") return dimCost + Math.sqrt((startPos.x-endPos.x/8)*(startPos.x-endPos.x/8)+(startPos.y-endPos.y)*(startPos.y-endPos.y)+(startPos.z-endPos.z/8)*(startPos.z-endPos.z/8))
  if(endPos.d=="minecraft:the_nether") return dimCost + Math.sqrt((startPos.x/8-endPos.x)*(startPos.x/8-endPos.x)+(startPos.y-endPos.y)*(startPos.y-endPos.y)+(startPos.z/8-endPos.z)*(startPos.z/8-endPos.z))
  
  return dimCost + Math.sqrt((startPos.x-endPos.x)*(startPos.x-endPos.x)+(startPos.y-endPos.y)*(startPos.y-endPos.y)+(startPos.z-endPos.z)*(startPos.z-endPos.z))
}
function calcSeverity(safeP, p, subP) {
  subP = subP || 1
  if(subP <= 0.01) return 0
  if(subP != 1) p = p*(Math.log2(subP+0.32)/2+0.8)+safeP*(subP-1)*0.075
  if(p<safeP) return 0
  let rand = Math.random()
  return Math.max(0,-1.27247*Math.log2((-2436*safeP*(rand+0.392857))/(1150*safeP-2800*p))-1)
}

let monument_sideEffects = {
  "Heat": (server, selector, severity) => {
    if(severity > 0) server.runCommandSilent(`/execute at ${selector} run summon minecraft:lightning_bolt`)
    if(severity <= 1) return
    
    let uid = Math.floor(Math.random()*100)
    server.runCommandSilent(`/tag ${selector} add TheSplit.Overheated${uid}`)
    for(let i=1;i<=Math.floor(severity);i++) server.scheduleInTicks(15*i, server, callback => {server.runCommandSilent(`/execute at @e[tag=TheSplit.Overheated${uid}] run summon minecraft:lightning_bolt`)})
    server.scheduleInTicks(15*Math.floor(severity)+5, server, callback => {server.runCommandSilent(`/tag @e[tag=TheSplit.Overheated${uid}] remove TheSplit.Overheated${uid}`)})
  },
  "-Heat": (server, selector, severity) => {if(severity>0) server.runCommandSilent(`/effect give ${selector} mowziesmobs:frozen ${Math.floor(severity*5)}`)},
  "Decay": (server, selector, severity) => {if(severity>0) server.runCommandSilent(`/effect give ${selector} minecraft:wither ${Math.floor(severity*5)} ${Math.floor(severity/2)}`)}
}
function applySideEffects(server, selector, stats, dist) {
  let severity = calcSeverity(stats.Stability*stats.Stability, dist)
  if(severity > 0) server.runCommandSilent(`/effect give ${selector} minecraft:slowness ${4+Math.round(6*severity)} ${Math.floor(severity)}`)
  if(severity > 0) server.runCommandSilent(`/effect give ${selector} minecraft:weakness ${4+Math.round(6*severity)} ${Math.floor(severity/2)}`)
  if(severity > 1) server.runCommandSilent(`/effect give ${selector} minecraft:mining_fatigue ${4+Math.round(6*severity)} ${Math.floor((severity-1)/2)}`)
  if(severity > 1) server.runCommandSilent(`/effect give ${selector} minecraft:blindness ${Math.round(3*severity)}`)
  if(severity > 2) server.runCommandSilent(`/effect give ${selector} minecraft:hunger ${2+Math.round(4*severity)} ${Math.floor(severity)}`)
  if(severity > 3) server.runCommandSilent(`/effect give ${selector} minecraft:poison ${2+Math.round(4*severity)} ${Math.floor((severity-3)/2)}`)
  if(severity > 4) server.runCommandSilent(`/effect give ${selector} alexsmobs:ender_flu ${Math.max(20,Math.round(300-45*(severity-4)))} ${Math.floor(severity-4)}`)
  
  for(let spec in stats) {
    if(spec == "Stability" || spec == "Potential" || spec == "missed") continue
    if(stats[spec]>0 && monument_sideEffects[spec]) monument_sideEffects[spec](server, selector, calcSeverity(stats.Stability*stats.Stability, dist, stats[spec]))
    if(stats[spec]<0 && monument_sideEffects["-"+spec]) monument_sideEffects["-"+spec](server, selector, calcSeverity(stats.Stability*stats.Stability, dist, -stats[spec]))
  }
}

// Teleportation trigger
events.listen('player.tick', function (event) {
  if (event.player.server && event.player.ticksExisted % 10 === 0) {
    if(!event.player.getPotionEffects().isActive("minecraft:levitation")
    || event.server.runCommandSilent("origin has power "+event.player.name+" sprightly_fox:the_split")==0) return
    if(loadNbtStorage(event.player)["sprightly_fox:the_split_Teleport"]<2000) return
    
    event.server.scheduleInTicks(7, event.server, callback => {
      let pos = getMonumentPos(event.player, "Mon"); if(!pos.d) return
      let retPos = {
        x: event.player.x-0.5,
        y: event.player.y-0.5,
        z: event.player.z-0.5,
        d: event.player.getWorld().getDimension()
      }
      
      let block = event.server.getWorld(pos.d); if(!block) return
      block = block.getBlock(pos.x, pos.y, pos.z)
      let monStats = analyzeMonument(block, event.server, false)
      
      let toMon = getBilocState(event.player)
      let dimStab = monStats["Dimensional Stability"] || 0
      let randTp = (dimStab > 0
        ?(Math.random()<0.1-dimStab/100)
        :(Math.random()<1-0.9/(1-dimStab*0.8))
      )
      if(randTp) {
        let randPlayer = event.server.getPlayers()
        randPlayer = randPlayer[Math.floor(Math.random()*randPlayer.length)]
        let retPos = {
          x: randPlayer.x-0.5,
          y: randPlayer.y-0.5,
          z: randPlayer.z-0.5,
          d: randPlayer.getWorld().getDimension()
        }
        if(toMon == 1) setMonumentPos(event.player, "Ret", retPos)
        toMon = 1
        event.server.scheduleInTicks(3, event.server, callback => {animateMonument(event.server, pos, "fromMon")})
      } else if(toMon == 1) {
        let animPos = {x: pos.x, y: pos.y, z: pos.z, d: pos.d}
        event.server.scheduleInTicks(3, event.server, callback => {animateMonument(event.server, animPos, "toMon")})
        pos.y++
        setMonumentPos(event.player, "Ret", retPos)
      } else {
        pos = getMonumentPos(event.player, "Ret"); if(!pos.d) return
        event.server.scheduleInTicks(3, event.server, callback => {animateMonument(event.server, pos, "fromMon")})
      }
      event.server.runCommandSilent("/effect clear "+event.player.name+" minecraft:levitation")
      event.server.runCommandSilent(`/execute at ${event.player.name} run tag @e[distance=..${Math.round((monStats.Spread||0)*10)/10}] add TheSplit.MidTeleport`)
      event.server.runCommandSilent(`/execute in ${pos.d} run tp @e[tag=TheSplit.MidTeleport] ${pos.x+0.5} ${pos.y+0.5} ${pos.z+0.5}`)
      let dist = calcDistance(pos, retPos)
      if(monStats.missing > 0) dist*=Math.pow(2, 2+monStats.missing/3)
      let health = event.player.getHealth()/event.player.getMaxHealth()
      if(health < 0.5) dist*=(3-health*4)
      
      applySideEffects(event.server, '@e[tag=TheSplit.MidTeleport]', monStats, dist)
      event.server.runCommandSilent(`/tag @e[tag=TheSplit.MidTeleport] remove TheSplit.MidTeleport`)
      
      let cooldown = monStats.Stability*monStats.Stability*(Math.pow(2, monStats.Potential/10)-1)
      cooldown = 1-cooldown/(dist+cooldown)
      setBilocState(event.player, 1-toMon, {"sprightly_fox:sprightly": 0, "sprightly_fox:the_split_Teleport": Math.round((1-cooldown)*2000)})
    })
    
  }
})


// Monument activation/stat check
onEvent('block.right_click', event => {
	if(event.item.getId() != 'rftoolsbase:infused_diamond') return
  if(event.server.runCommandSilent("origin has power "+event.player.name+" sprightly_fox:the_split")==0) return
  
  
  let curMon = getMonumentPos(event.player, "Mon")
  let isActive = (curMon.d == event.block.getDimension() && curMon.x == event.block.x && curMon.y == event.block.y && curMon.z == event.block.z)
  let stats = displayMonumentStats(event.block, event.player, event.server, 'MONUMENT '+(isActive?"ACTIVE":"CREATED"))
  
  if(!(stats.missed > 0) && !isActive) {
    if(event.item.count == 1) event.server.runCommandSilent('/replaceitem entity '+event.player.name+' weapon.mainhand minecraft:air')
    else event.server.runCommandSilent('/replaceitem entity '+event.player.name+' weapon.mainhand rftoolsbase:infused_diamond '+(event.item.count-1))
    
    let newPos = {
      x: event.block.x,
      y: event.block.y,
      z: event.block.z,
      d: event.block.getDimension()
    }
    setMonumentPos(event.player, "Mon", newPos)
    animateMonument(event.server, newPos, "initial")
    setBilocState(event.player, 1)
  }
	
})