<?php
header('Access-Control-Allow-Origin: *');
/**
 * 
 * Copyright (c) 2005-2015, Braulio José Solano Rojas
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, are
 * permitted provided that the following conditions are met:
 * 
 * 	Redistributions of source code must retain the above copyright notice, this list of
 * 	conditions and the following disclaimer. 
 * 	Redistributions in binary form must reproduce the above copyright notice, this list of
 * 	conditions and the following disclaimer in the documentation and/or other materials
 * 	provided with the distribution. 
 * 	Neither the name of the Solsoft de Costa Rica S.A. nor the names of its contributors may
 * 	be used to endorse or promote products derived from this software without specific
 * 	prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND
 * CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
 * INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 * NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
 * HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR
 * OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 *
 * @version $Id$
 * @copyright 2005-2015
 */


/**
 * HolaMundo Clase que implementa el típico primer ejemplo de programación en todo lenguaje.
 * 
 * @package SoapDiscovery
 * @author Braulio José Solano Rojas
 * @copyright Copyright (c) 2005-2015 Braulio José Solano Rojas
 * @version $Id$
 * @access public
 **/
class Hangman {
	private $word = '';
	private $wrongCount = 0;
	private $rightCount = 0;
	private $words = array();
	//private $difficulty = 'easy';
	
	/**
	 * HolaMundo::__construct() Constructor de la clase HolaMundo.
	 * 
	 * @param string $nombre
	 * @return string
	 **/
	public function __construct() {
		
	}
	
	/**
	 * HolaMundo::salude() Saluda al Mundo o a $this->nombre o saluda a $nombre si $nombre no es vacío.
	 * $this->words[array_rand($this->words, 1)] or
	 * @param string $nombre
	 * @return string
	 **/
	public function getWord() {
		
		$this->words[0] = 'retard';
		$wordFile = fopen("words.txt", "r") or die('Error opening file!');
		
		while(!feof($wordFile)){
			$word = (string)fgets($wordFile);
			$word = rtrim($word);
			$word = strtolower($word);
			$this->words[] = $word;
		}
		fclose($wordFile);	
		
		$this->reset();
		$this->reset();
		return $this->word;
	}
	private function reset(){
		$this->word = $this->words[array_rand($this->words,1)];
		//$this->word = str_replace(" ", '', $this->word);
		$this->wrongCount = 0;
		$this->rightCount = strlen($this->word);
	}
	
	/**
	 * HolaMundo::servidorEstampillaDeTiempo() Devuelve el tiempo del servidor.
	 * @param string $letter
	 * @return boolean
	 **/
	public function checkGuess($letter) {
		if(substr_count($this->word, $letter) > 0){
			$this->rightCount -= substr_count($this->word, $letter);
			//echo $letter;
			return true;
		}
		else{
			$this->wrongCount++;
			return false;
		}
		
	}
	
	/**
	 * HolaMundo::ultimoSaludo() Devuelve el saludo guardado en la propiedad ultimo_saludo.
	 * 
	 * @return string 
	 **/
	public function getWrongCount() {
		return $this->wrongCount;
	}
	
	public function getRightCount() {
		return $this->rightCount;
	}
	
	public function checkWon(){
		return $this->rightCount === 0;
	}
	
	public function checkLost(){
		return $this->wrongCount === 6;
	}
	
}

?>
