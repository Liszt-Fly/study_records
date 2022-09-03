import {Scene,BoxGeometry,MeshBasicMaterial,Mesh,PerspectiveCamera,WebGLRenderer, Vector3, AxesHelper, Group} from "three"
//Scene
const scene=new Scene()
//Red cube
const geometry=new BoxGeometry(1,1,5)
const material=new MeshBasicMaterial({color:"#1abc9c"})
//mesh由几何体和材料组成
const mesh=new Mesh(geometry, material)
const cube=new Mesh(geometry,new MeshBasicMaterial({color:'red'}))
mesh.position.x=0
//func normalize 保持向量方向，length设置为1
console.log('mesh.position.normalize().length',mesh.position.normalize().length)
console.log('mesh.position.distanceTo(0,0,0)',mesh.position.distanceTo(new Vector3(2,0,0)))
//func 使用set方法来设置位置
// mesh.position.set(1,-0.5,0.5)
mesh.scale.set(0.2,0.2,0.2)
// mesh.rotation.reorder("YXZ")
// mesh.rotation.y=Math.PI*0.25
// mesh.rotation.x=Math.PI*0.25
cube.position.x=0.254
cube.scale.set(0.2,0.2,0.2)
Group
const group=new Group()
group.add(cube,mesh)
scene.add(group)
group.rotation.x=Math.PI*0.25

//Sizes
const sizes={
  width:800,
  height:600
}

//Camera
const camera=new PerspectiveCamera(75,sizes.width/sizes.height)
// camera.position.x=0.1
// camera.position.y=0.2

camera.position.z=1
camera.position.y=0.5
camera.lookAt(0,0,0)
//func distanceTo
console.log('mesh.position.distanceTo(camera.position)',mesh.position.distanceTo(camera.position))
scene.add(camera)

//Render
const canvas=document.querySelector(".webgl")!
console.log('canvas',canvas)
const renderer=new WebGLRenderer({
  canvas
})
//func axes helper
const axesHelper=new AxesHelper()
scene.add(axesHelper)
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

