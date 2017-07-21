export default {
    ASSET_DEFAULT_FEE : '0.001 GOLOS',

    STEEMIT_100_PERCENT: 10000,
    STEEMIT_1_PERCENT: 10000 / 100, // 100
    STEEMIT_DEFAULT_FORCE_SETTLEMENT_OFFSET: 0, // < 1%
    STEEMIT_DEFAULT_FORCE_SETTLEMENT_MAX_VOLUME: 20 * 100, // < 20%
    STEEMIT_DEFAULT_PRICE_FEED_LIFETIME: 60 * 60 * 24, // 1 day
    STEEMIT_DEFAULT_FORCE_SETTLEMENT_DELAY: 60 * 60 * 24, // 1 day

    permission_flags: {
        charge_market_fee    : 0x01, /** an issuer-specified percentage of all market trades in this asset is paid to the issuer */
        white_list           : 0x02, /** accounts must be whitelisted in order to hold this asset */
        override_authority   : 0x04, /** issuer may transfer asset back to himself */
        transfer_restricted  : 0x08, /** require the issuer to be one party to every transfer */
        disable_force_settle : 0x10, /** disable force settling */
        global_settle        : 0x20, /** allow the bitasset issuer to force a global settling -- this may be set in permissions, but not flags */
        disable_confidential : 0x40, /** allow the asset to be used with confidential transactions */
        witness_fed_asset    : 0x80, /** allow the asset to be fed by witnesses */
        committee_fed_asset  : 0x100 /** allow the asset to be fed by the committee */
    },

    uia_permission_mask: [
        "charge_market_fee",
        "white_list",
        "override_authority",
        "transfer_restricted",
        "disable_confidential"
    ]
}
