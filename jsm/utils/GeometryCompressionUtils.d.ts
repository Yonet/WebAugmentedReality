import * as THREE from "../../../threeJS/three.module.js";

export namespace GeometryCompressionUtils {

	export function compressNormals( mesh: THREE.Mesh, encodeMethod: String );
	export function compressPositions( mesh: THREE.Mesh );
	export function compressUvs( mesh: THREE.Mesh );

}