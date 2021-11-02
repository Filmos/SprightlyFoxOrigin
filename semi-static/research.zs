import crafttweaker.api.item.IItemStack;
import crafttweaker.api.data.MapData;
import crafttweaker.api.item.IngredientAny;
import crafttweaker.api.item.IIngredient;
import mods.jei.JEI;
import crafttweaker.api.util.text.MCTextComponent;
import crafttweaker.api.data.DoubleData;
import crafttweaker.api.data.IData;
import crafttweaker.api.BracketHandlers;
import crafttweaker.api.data.ListData;
import crafttweaker.api.data.ICollectionData;
import crafttweaker.api.data.StringData;

// Empty research book
craftingTable.addShaped("research_book", <item:minecraft:written_book>.withTag({title: "§bResearch Notebook" as string}), [
    [<item:minecraft:air>, <item:rftoolsbase:dimensionalshard>, <item:minecraft:air>],
    [<item:agricraft:agri_magnifying_glass>, <item:minecraft:written_book>.onlyIf("research", (book as IItemStack)=>{return !<item:minecraft:written_book>.withTag({research: true}).matches(book);}), <item:calemiutils:pencil>],
    [<item:minecraft:air>, <item:rftoolsbase:dimensionalshard>, <item:minecraft:air>]
], (usualOut as IItemStack, inputs as IItemStack[][]) => {
    var book = inputs[1][1].tag.asMap();
    
    book["title"] = "§bResearch Notebook§r";
    book["author"] = "§f" + book["author"].getString() + "§r";
    book["research"] = true;
    
    var pages = book["pages"].asCollection();
    pages.add(0, "[\"\",{\"text\":\"RESEARCH\",\"bold\":true}]");
    book["pages"] = pages;
    book["researchProgress"] = {};
    
    return <item:minecraft:written_book>.withTag(book);
});



// Declaring research plans
function newResearchPlan(plan as IItemStack, mult as double, cap as double, rec as IIngredient[][]) as int {
  plan.addTooltip(MCTextComponent.createStringTextComponent("\u00A77Research Multiplier: \u00A7f"+mult));
  plan.addTooltip(MCTextComponent.createStringTextComponent("\u00A77Research Cap: \u00A7f"+cap));
  plan.modifyShiftTooltip((stack as IItemStack, tooltip as stdlib.List<MCTextComponent>, isAdvanced as bool) as void => {
      if(stack.hasTag && (stack.tag as MapData).getAt("researchMult") != null && (stack.tag as MapData).getAt("researchCap") != null) {
          var tag = stack.tag.asMap();  
          tooltip.remove(2);
          tooltip.remove(1);
          tooltip.insert(1, MCTextComponent.createStringTextComponent("\u00A77Research Multiplier: \u00A7f"+(tag["researchMult"] as DoubleData).getDouble()));
          tooltip.insert(2, MCTextComponent.createStringTextComponent("\u00A77Research Cap: \u00A7f"+(tag["researchCap"] as DoubleData).getDouble()));
          if((stack.tag as MapData).getAt("researchTarget") != null) {tooltip.insert(1, MCTextComponent.createStringTextComponent("\u00A77Research: \u00A7b"+tag["researchTarget"].getString()));}
      }
  }, (stack as IItemStack, tooltip as stdlib.List<MCTextComponent>, isAdvanced as bool) as void => {
      if(stack.hasTag && (stack.tag as MapData).getAt("researchMult") != null && (stack.tag as MapData).getAt("researchCap") != null) {
          var tag = stack.tag.asMap();
          tooltip.remove(2);
          tooltip.remove(1);
          if((stack.tag as MapData).getAt("researchTarget") != null) {tooltip.insert(1, MCTextComponent.createStringTextComponent("\u00A7b"+tag["researchTarget"].getString()+" \u00A78["+(tag["researchMult"] as DoubleData).getDouble()+"/"+(tag["researchCap"] as DoubleData).getDouble()+"]"));}
          else {
              tooltip.insert(1, MCTextComponent.createStringTextComponent("\u00A77Research Multiplier: \u00A7f"+(tag["researchMult"] as DoubleData).getDouble()));
              tooltip.insert(2, MCTextComponent.createStringTextComponent("\u00A77Research Cap: \u00A7f"+(tag["researchCap"] as DoubleData).getDouble()));
          }
      }
  });
  <tag:items:crafttweaker:research_plan>.add(plan);
  
  
  var outPlan = plan.withTag({
    researchMult: mult as double, 
    researchCap: cap as double
  });
  
  craftingTable.addShaped(plan.translationKey, outPlan, rec,
  (usualOut as IItemStack, inputs as IItemStack[][]) => {
      var tags = usualOut.tag.asMap();
      tags["researchTarget"] = inputs[1][1].getDefinition().getDefaultInstance().displayName;
      return usualOut.withTag(tags);
  });
  mods.jei.JEI.hideRecipe("minecraft:crafting", "crafttweaker:"+plan.translationKey);
  //mods.jei.JEI.hideRecipe("minecolonies:baker/crafting", "crafttweaker:"+plan.translationKey);
  //mods.jei.JEI.hideRecipe("minecolonies:dyer/crafting", "crafttweaker:"+plan.translationKey);
  //mods.jei.JEI.hideRecipe("minecolonies:farmer/crafting", "crafttweaker:"+plan.translationKey);
  //mods.jei.JEI.hideRecipe("minecolonies:mechanic/crafting", "crafttweaker:"+plan.translationKey);
  //mods.jei.JEI.hideRecipe("minecolonies:planter/crafting", "crafttweaker:"+plan.translationKey);
  
  craftingTable.addShaped(plan.translationKey+"_jei", outPlan, [[rec[0][0], rec[0][1], rec[0][2]], [rec[1][0], <item:ftbquests:missing_item>.withTag({display: {Name: "{\"text\":\"§r§9Any Item\"}" as string}}), rec[1][2]], [rec[2][0], rec[2][1], rec[2][2]]],
  (usualOut as IItemStack, inputs as IItemStack[][]) => {
      var tags = usualOut.tag.asMap();
      tags["researchTarget"] = inputs[1][1].getDefinition().getDefaultInstance().displayName;
      return usualOut.withTag(tags);
  });
  
  return 0;
}

craftingTable.addShapeless("blank_research_plan", <item:kubejs:blank_research_plan>, [<item:minecraft:paper>, <item:calemiutils:pencil>, <item:rftoolsbase:dimensionalshard>]);
newResearchPlan(<item:kubejs:destructive_research_plan>, 1.0, 8.0, [
    [<item:minecraft:air>, <item:rftoolsbase:dimensionalshard>, <item:minecraft:air>],
    [<item:rftoolsbase:dimensionalshard>, IngredientAny.getInstance(), <item:rftoolsbase:dimensionalshard>],
    [<item:minecraft:air>, <item:kubejs:blank_research_plan>, <item:minecraft:air>]
]);
newResearchPlan(<item:kubejs:non_invasive_research_plan>, 0.3, 2.0, [
    [<item:rftoolsbase:dimensionalshard>, <item:minecraft:glass>, <item:rftoolsbase:dimensionalshard>],
    [<item:minecraft:glass>, IngredientAny.getInstance().reuse(), <item:minecraft:glass>],
    [<item:minecraft:air>, <item:kubejs:blank_research_plan>, <item:minecraft:air>]
]);


// Research Results
for key, value in quasi {
  <tag:items:crafttweaker:quasi_material>.add(BracketHandlers.getItem(key));
}

var isPlanValid = (plan as IItemStack) as bool => {
  if(!plan.hasTag) {return false;}
  if((plan.tag as MapData).getAt("researchTarget") == null) {return false;}
  if((plan.tag as MapData).getAt("researchMult") == null) {return false;}
  if((plan.tag as MapData).getAt("researchCap") == null) {return false;}
  return true;
};

var floor = (input as double) as double => {
  return (((0+input*10) as int) as double)/10.0;
};
craftingTable.addShaped("research_results", <item:kubejs:research_results>, [
    [<tag:items:crafttweaker:quasi_material>, <tag:items:crafttweaker:quasi_material>, <tag:items:crafttweaker:quasi_material>],
    [<tag:items:crafttweaker:quasi_material>, (<tag:items:crafttweaker:research_plan> as IIngredient).onlyIf("valid", isPlanValid), <tag:items:crafttweaker:quasi_material>],
    [<tag:items:crafttweaker:quasi_material>, <tag:items:crafttweaker:quasi_material>, <tag:items:crafttweaker:quasi_material>]
],
(usualOut as IItemStack, inputs as IItemStack[][]) => {
    var stabSum = 0.0;
    var stabMax = 0.0;
    var potSum = 0.0;
    var potMax = 0.0;
    for row in inputs {   for item in row {
        if(!(<tag:items:crafttweaker:research_plan> as IIngredient).matches(item)) {
            var q = quasi[item.registryName];
            
            if(q["Stability"] > stabMax) stabMax = q["Stability"];
            if(q["Potential"] > potMax) potMax = q["Potential"];
            stabSum = stabSum + q["Stability"];
            potSum = potSum + q["Potential"];
        }
    }}
    var tag = inputs[1][1].tag.asMap();
    //stabSum = math.floor(stabSum * (tag["researchMult"] as DoubleData).getDouble());
    stabSum = floor(stabSum * (tag["researchMult"] as DoubleData).getDouble());
    potSum = floor(potSum * (tag["researchMult"] as DoubleData).getDouble());
    stabMax = floor(stabMax * (tag["researchCap"] as DoubleData).getDouble());
    potMax = floor(potMax * (tag["researchCap"] as DoubleData).getDouble());
    
    if(stabSum > stabMax) {stabSum = stabMax;}
    if(potSum > potMax) {potSum = potMax;}

    return usualOut.withTag({
      "researchTarget": (inputs[1][1].tag as MapData).getAt("researchTarget"),
      "researchMechanical": stabSum,
      "researchMechanicalCap": stabMax,
      "researchMagical": potSum,
      "researchMagicalCap": potMax
    });
});


var isResultValid = (plan as IItemStack) as bool => {
  if(!plan.hasTag) {return false;}
  var tag = plan.tag as MapData;
  if(tag.getAt("researchTarget") == null) {return false;}
  if(tag.getAt("researchMechanical") == null) {return false;}
  if(tag.getAt("researchMechanicalCap") == null) {return false;}
  if(tag.getAt("researchMagical") == null) {return false;}
  if(tag.getAt("researchMagicalCap") == null) {return false;}
  return true;
};
<item:kubejs:research_results>.modifyShiftTooltip((stack as IItemStack, tooltip as stdlib.List<MCTextComponent>, isAdvanced as bool) as void => {
    if(!isResultValid(stack)) {tooltip.insert(1, "\u00A7cInvalid"); return;}
    var tag = stack.tag.asMap();
    tooltip.insert(1, MCTextComponent.createStringTextComponent("\u00A77Research: \u00A7b"+tag["researchTarget"].getString()));
    tooltip.insert(2, MCTextComponent.createStringTextComponent("\u00A77Mechanical Research: \u00A75"+(tag["researchMechanical"] as DoubleData).getDouble()+"/"+(tag["researchMechanicalCap"] as DoubleData).getDouble()));
    tooltip.insert(3, MCTextComponent.createStringTextComponent("\u00A77Magical Research: \u00A7d"+(tag["researchMagical"] as DoubleData).getDouble()+"/"+(tag["researchMagicalCap"] as DoubleData).getDouble()));
}, (stack as IItemStack, tooltip as stdlib.List<MCTextComponent>, isAdvanced as bool) as void => {
    if(!isResultValid(stack)) {tooltip.insert(1, "\u00A7cInvalid"); return;}
    var tag = stack.tag.asMap();
    tooltip.insert(1, MCTextComponent.createStringTextComponent("\u00A7b"+tag["researchTarget"].getString()+" \u00A78[\u00A75"+(tag["researchMechanical"] as DoubleData).getDouble()+"/"+(tag["researchMechanicalCap"] as DoubleData).getDouble()+"\u00A78, \u00A7d"+(tag["researchMagical"] as DoubleData).getDouble()+"/"+(tag["researchMagicalCap"] as DoubleData).getDouble()+"\u00A78]"));
});


// Combining results
var isResearchNotebookValid = (plan as IItemStack) as bool => {
  if(!plan.hasTag) {return false;}
  if((plan.tag as MapData).getAt("research") == null) {return false;}
  if((plan.tag as MapData).getAt("researchProgress") == null) {return false;}
  if((plan.tag as MapData).getAt("pages") == null) {return false;}
  return true;
};
public function getResearchLevel(vv as double) as string {
  if(vv < 3.0) {return "None";}
  if(vv < 7.5) {return "Rudementary";}
  if(vv < 15.0) {return "Basic";}
  if(vv < 30.0) {return "Standard";}
  if(vv < 45.0) {return "Extensive";}
  if(vv < 75.0) {return "Hyper-Precise";}
  if(vv < 220.0) {return "Relativistic";}
  if(vv < 400.0) {return "Quantum Level";}
  if(vv < 650.0) {return "Sub-Quantum Level";}
  if(vv < 1000.0) {return "Singularity Level";}
  return "§kWhatTheFuck";
}
craftingTable.addShaped("add_research_results", <item:minecraft:written_book>.withTag({title: "§bResearch Notebook" as string}),
    [[<item:minecraft:written_book>.onlyIf("research", isResearchNotebookValid), <item:kubejs:research_results>.onlyIf("valid", isResultValid)]],
(usualOut as IItemStack, inputs as IItemStack[][]) => {
    var book = <item:minecraft:air>;
    var result = <item:minecraft:air>;
    for row in inputs {   for item in row {
        if(<item:kubejs:research_results>.matches(item)) {result = item;}
        if(<item:minecraft:written_book>.matches(item)) {book = item;}
    }}
    
    var research = result.tag.asMap();
    var thisTarget = (research["researchTarget"] as StringData).getString();
    var thisMechanical = (research["researchMechanical"] as DoubleData).getDouble();
    var thisMagical = (research["researchMagical"] as DoubleData).getDouble();
    
    var bookTag = book.tag.asMap();
    var progress = bookTag["researchProgress"].asMap();
    if((bookTag["researchProgress"] as MapData).getAt(thisTarget) != null) {
      var thisMechanicalCap = (research["researchMechanicalCap"] as DoubleData).getDouble();
      var thisMagicalCap = (research["researchMagicalCap"] as DoubleData).getDouble();
      
      var thisProgress = progress[thisTarget].asMap();
      var allMechanical = (thisProgress["mechanical"] as DoubleData).getDouble();
      var allMagical = (thisProgress["magical"] as DoubleData).getDouble();
      
      if(allMechanical < thisMechanicalCap) {
        thisMechanical += allMechanical;
        if(thisMechanical > thisMechanicalCap) {thisMechanical = thisMechanicalCap;}
      } else {
        thisMechanical = allMechanical;
      }
      
      if(allMagical < thisMagicalCap) {
        thisMagical += allMagical;
        if(thisMagical > thisMagicalCap) {thisMagical = thisMagicalCap;}
      } else {
        thisMagical = allMagical;
      }
    }
    progress[thisTarget] = {mechanical: thisMechanical, magical: thisMagical};
    bookTag["researchProgress"] = progress;
    
    
    
    var pages = new ListData();
    var newPage = "[\"\",{\"text\":\"RESEARCH\",\"bold\":true}";
    var newPageClear = "RESEARCH ";
    for key, value in progress {
      var v = value.asMap();
      var mechanical = (v["mechanical"] as DoubleData).getDouble();
      var magical = (v["magical"] as DoubleData).getDouble();
      
      var mechanicalText = getResearchLevel(mechanical);
      var magicalText = getResearchLevel(magical);
      
      if((newPageClear+key+" - "+mechanical+"/"+magical).length > 240) {
        pages.add(newPage+"]");
        newPage = "[\"\",{\"text\":\"RESEARCH\",\"bold\":true}";
        newPageClear = "RESEARCH ";
      }
      newPage = newPage+",\"\\n\",{\"text\":\""+key+" - \",\"color\":\"dark_gray\"},{\"text\":\""+mechanical+"\",\"bold\":true,\"color\":\"dark_purple\",\"hoverEvent\":{\"action\":\"show_text\",\"contents\":[{\"text\":\"Mechanical Research: "+mechanicalText+"\",\"color\":\"dark_purple\"}]}},{\"text\":\"/\",\"color\":\"dark_gray\"},{\"text\":\""+magical+"\",\"bold\":true,\"color\":\"light_purple\",\"hoverEvent\":{\"action\":\"show_text\",\"contents\":[{\"text\":\"Magical Research: "+magicalText+"\",\"color\":\"light_purple\"}]}}";
      newPageClear = newPageClear+key+" - "+mechanical+"/"+magical + " ";
    }
    pages.add(newPage+"]");
    
    var oldPages = (bookTag["pages"] as ICollectionData).asList();
    for value in oldPages {
      var v = (value as StringData).getString() as string;
      if((v.indexOf("[\"\",{\"text\":\"RESEARCH\",\"bold\":true}") as int) != 0) {
          pages.add(value as StringData);
      }
    }
    bookTag["pages"] = pages;
    
    return book.withTag(bookTag);
});
craftingTable.addShapeless("research_copying_jei", <item:minecraft:written_book>.withTag({generation: 1 as int, title: "§bResearch Notebook" as string}),
    [<item:minecraft:written_book>.withTag({title: "§bResearch Notebook" as string}), <item:minecraft:writable_book>]
);
craftingTable.addShapeless("quasi_journal", <item:patchouli:guide_book>.withTag({"patchouli:book": "patchouli:quasi_journal" as string}),
    [<item:minecraft:book>, <item:kubejs:blank_research_plan>]
);