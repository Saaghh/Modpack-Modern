// priority: 0

const registerMinecraftRecipes = (event) => {

    // Copper fix
    event.remove({id: 'minecraft:copper_ingot_from_smelting_raw_copper'})
    event.remove({id: 'minecraft:copper_ingot_from_blasting_raw_copper'})

    event.smelting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_smelting_raw_copper').xp(0.7)
    event.blasting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_blasting_raw_copper').xp(0.7)

    // Iron fix
    event.remove({id: `minecraft:iron_ingot_from_smelting_raw_iron`})
    event.remove({id: `minecraft:iron_ingot_from_blasting_raw_iron`})

    event.smelting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_smelting_raw_iron').xp(0.7)
    event.blasting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_blasting_raw_iron').xp(0.7)

    // Gold fix
    event.remove({id: `minecraft:gold_ingot_from_smelting_raw_gold`})
    event.remove({id: `minecraft:gold_ingot_from_blasting_raw_gold`})

    event.smelting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_smelting_raw_gold').xp(0.7)
    event.blasting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_blasting_raw_gold').xp(0.7)
}