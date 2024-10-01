import React from 'react'

export const PopUpModal = () => {
  return (
    
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title fs-5" id="staticBackdropLabel">Are You sure want to Delete Record ?</h3>
       
      </div>
      
      <div class="modal-footer">
        <button  class="btn btn-danger" data-bs-dismiss="modal">Yes</button>
        <button  class="btn btn-blue" data-bs-dismiss="modal" aria-label="Close" >No</button>
      </div>
    </div>
  </div>
</div>
  )
}
