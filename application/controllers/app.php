<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class App extends CI_Controller {

	public $data = array();

	public function __construct()
	{
		parent::__construct();

		$this->load->library(array('ion_auth'));
		$this->load->helper(array('url','language'));
	}

	public function index()
	{
		if (!$this->ion_auth->logged_in())
		{
			$this->data['page'] = $this->load->view('page/login', array(), true);
		}
		else
		{
			$this->data['page'] = $this->load->view('page/welcome', array(), true);
		}

		$this->load->view('layout/default', $this->data);
	}
}
