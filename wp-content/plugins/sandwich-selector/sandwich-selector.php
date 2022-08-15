<?php
/**
 * Plugin Name:       Sandwich Selector
 * Description:       Pulls in Sandwiches from a CPT for an eCommerce app
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Cole Geerts
 * Text Domain:       sandwich-selector
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_sandwich_selector_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_block_sandwich_selector_block_init' );
