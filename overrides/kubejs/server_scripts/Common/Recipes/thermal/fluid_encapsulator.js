// Fix for Fluid Encapsulator (Thermal Bottler) recipes using potions + Cinder Flour
// Thermal's compat recipes with Create for potion-based bottler recipes have NBT fluid conflicts
// causing Night Vision + Cinder Flour to output Redstone instead of Glowstone Dust
ServerEvents.recipes(event => {
    // Remove the broken Create compat recipes that have NBT fluid conflicts
    event.remove({ id: 'thermal:compat/create/bottler_create_glowstone' })
    event.remove({ id: 'thermal:compat/create/bottler_create_redstone' })

    // Add corrected recipe: Night Vision Potion + Cinder Flour -> Glowstone Dust
    event.recipes.thermal.bottler('minecraft:glowstone_dust', [
        'create:cinder_flour',
        Fluid.of('minecraft:potion', '{Potion:"minecraft:night_vision"}').fluidStack
    ]).id('mce2:thermal/bottler/glowstone_from_night_vision')

    // Add corrected recipe: Strength Potion + Cinder Flour -> Redstone Dust
    event.recipes.thermal.bottler('minecraft:redstone', [
        'create:cinder_flour',
        Fluid.of('minecraft:potion', '{Potion:"minecraft:strength"}').fluidStack
    ]).id('mce2:thermal/bottler/redstone_from_strength')
})