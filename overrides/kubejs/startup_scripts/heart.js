ItemEvents.modification(event => {
    event.modify('kubejs:lorkhan_heart', item => {
        item.attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .curioTick((slotContext, stack) => {
                    const player = slotContext.entity()
                    if (player.level.isClientSide()) return
                    const lowhp = player.health <= player.maxHealth / 2
                    if (player.stages.has('heart_cooldown')) return
                    if (!lowhp) return
                    player.potionEffects.add('irons_spellbooks:heartstop', 400, 0, true, false)
                    player.potionEffects.add('irons_spellbooks:hastened', 400, 3, false, false)

                    player.sendData('lorkhan_heart_activate', {})
                    player.stages.add('heart_cooldown')
                    player.server.scheduleInTicks(12000, () => {
                        if (player) {
                            player.stages.remove('heart_cooldown')
                        }
                    })
                })
        )
    })
})