<?php include('includes/header.php'); ?>

	<!-- Main Body -->
	<section id="main-content">
		<div id="box-content" class="center">
			<div class="tit-principal">
				<h1>
					<span class="sprite"></span>
					Contato
				</h1>
			</div>
			<form action="" method="" class="form-contact">
				<fieldset>
					<legend>Formulário de contato - Nova Fronteira Bioenergia</legend>
					<p class="subtitle"><span class="sprite"></span>Nome</p>
					<label>
						<input type="text" name="Nome" placeholder="Digite seu nome aqui">
					</label>
					<p class="subtitle"><span class="sprite"></span>E-mail</p>
					<label>
						<input type="email" name="email" placeholder="Digite seu email aqui">
					</label>
					<p class="subtitle"><span class="sprite"></span>Assunto</p>
					<label>
						<select name="assunto" class="styled">
							<option value="00">Escolha um assunto</option>
							<option value="01">Comercial</option>
						</select>
					</label>
					<p class="subtitle"><span class="sprite"></span>Mensagem</p>
					<label>
						<textarea name="mensagem" placeholder="Digite sua mensagem aqui"></textarea>
					</label>
					<button type="submit" name="submit">Enviar</button>
				</fieldset>
			</form>
		</div>
	</section>

<?php include('includes/footer.php'); ?>